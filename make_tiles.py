from pathlib import Path 

import geopandas as gpd 
import matplotlib 

matplotlib.use("Agg")
import matplotlib.pyplot as plt 
import numpy as np
import pandas as pd 
from PIL import Image 
from shapely.geometry import box 

NAME = "barcelona"
TILE_M = 500
PX = 256
MIN_INSIDE = 0.9
MIN_COVERAGE = 0.1

RAW = Path("data/raw")
OUT = Path("data/tiles") / NAME
OUT.mkdir(parents=True, exist_ok=True)

# Load saved data 
buildings = gpd.read_file(RAW / f"{NAME}_buildings.gpkg") 
buildings["geometry"] = buildings.geometry.buffer(0)
boundary = gpd.read_file(RAW / f"{NAME}_boundary.gpkg").geometry.union_all()

# Lay a grid of squares over the city
minx, miny, maxx, maxy = boundary.bounds 
squares = [
    box(x, y, x + TILE_M, y + TILE_M)
    for x in np.arange(minx, maxx, TILE_M)
    for y in np.arange(miny, maxy, TILE_M)
]
grid = gpd.GeoDataFrame(geometry=squares, crs=buildings.crs)
print(f"Grid squares covering the city's bounding box: {len(grid)}")

# Keep all the squares which are mostly inside the boundary 
inside = grid.geometry.intersection(boundary).area / TILE_M**2
grid = grid[inside >= MIN_INSIDE].reset_index(drop=True) 
print(f"Mostly inside the boundary: {len(grid)}")

# Draw each square as an image
fig = plt.figure(figsize=(1, 1), dpi = PX)
ax = fig.add_axes([0, 0, 1, 1])

records = []
for tile in grid.geometry:
    x0, y0, x1, y1 = tile.bounds 

    # Find all the buildings touching this square
    idx = buildings.sindex.query(tile, predicate="intersects")
    clipped = buildings.geometry.iloc[idx].intersection(tile)
    merged = clipped.union_all()
    merged = merged.buffer(0.5, join_style="mitre").buffer(-0.5, join_style="mitre")
    coverage = merged.area / TILE_M**2
    if coverage < MIN_COVERAGE:
        continue 

    ax.clear()
    gpd.GeoSeries([merged]).plot(ax=ax, color="black", linewidth=0, antialiased=False) 
    ax.set_xlim(x0, x1)
    ax.set_ylim(y0, y1)
    ax.set_axis_off()

    fig.canvas.draw()
    pixels = np.asarray(fig.canvas.buffer_rgba())[:, :, 0]
    filename = f"{NAME}_{int(x0)}_{int(y0)}.png"
    Image.fromarray(pixels).save(OUT /filename)
    records.append({"file": filename, "city": NAME, "x": x0, "y": y0, "coverage": coverage})

plt.close(fig)

# Save a table of all tiles 
index = pd.DataFrame(records)
index.to_csv(OUT / "index.csv", index=False)
print(f"Saved {len(index)} tiles to {OUT}")
print(f"Building coverage: median {index.coverage.median():.0%}, max {index.coverage.max():.0%}")

# Test contact sheet for review 
sample = index.sample(min(25, len(index)), random_state=0)
sheet, axes = plt.subplots(5, 5, figsize=(12, 12))
for a, (_, row) in zip(axes.flat, sample.iterrows()):
    a.imshow(Image.open(OUT / row.file), cmap="gray", vmin=0, vmax=255)
    a.set_title(f"{row.coverage:.0%}", fontsize=8)
for a in axes.flat:
    a.set_axis_off()
sheet.tight_layout()
sheet.savefig(Path("data") / f"{NAME}_contact_sheet.png", dpi=100)
print("Saved contact sheet!")