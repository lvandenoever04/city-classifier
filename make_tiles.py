import sys
from pathlib import Path

import geopandas as gpd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from PIL import Image
from shapely.geometry import box
from tqdm import tqdm

from cities import CITIES

TILE_M = 500      
STRIDE_M = 250     
PX = 256             
MIN_INSIDE = 0.9     
MIN_COVERAGE = 0.10   
CLOSE_M = 0.5         

RAW = Path("data/raw")
TILES = Path("data/tiles")


def make_tiles(name):
    out = TILES / name
    if (out / "index.csv").exists():
        print(f"{name}: already tiled, skipping")
        return
    if not (RAW / f"{name}_buildings.gpkg").exists():
        print(f"{name}: not downloaded yet, skipping")
        return
    out.mkdir(parents=True, exist_ok=True)

    buildings = gpd.read_file(RAW / f"{name}_buildings.gpkg")
    buildings["geometry"] = buildings.geometry.buffer(0)
    boundary = gpd.read_file(RAW / f"{name}_boundary.gpkg").geometry.union_all()

    minx, miny, maxx, maxy = boundary.bounds
    squares = [
        box(x, y, x + TILE_M, y + TILE_M)
        for x in np.arange(minx, maxx, STRIDE_M)
        for y in np.arange(miny, maxy, STRIDE_M)
    ]
    grid = gpd.GeoSeries(squares, crs=buildings.crs)
    inside = grid.intersection(boundary).area / TILE_M**2
    grid = grid[inside >= MIN_INSIDE]

    fig = plt.figure(figsize=(1, 1), dpi=PX)
    ax = fig.add_axes([0, 0, 1, 1])

    records = []
    for tile in tqdm(grid, desc=f" {name}", unit="tile"):
        x0, y0, x1, y1 = tile.bounds
        idx = buildings.sindex.query(tile, predicate="intersects")
        clipped = buildings.geometry.iloc[idx].intersection(tile)
        merged = clipped.union_all()
        merged = merged.buffer(CLOSE_M, join_style="mitre").buffer(-CLOSE_M, join_style="mitre")
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

        filename = f"{name}_{int(x0)}_{int(y0)}.png"
        Image.fromarray(pixels).save(out / filename)
        records.append({"file": filename, "city": name, "x": x0, "y": y0, "coverage": coverage})

    plt.close(fig)

    index = pd.DataFrame(records)
    index.to_csv(out / "index.csv", index=False)
    print(f" {name}: {len(index)} tiles, median coverage {index.coverage.median():.0%}")
    contact_sheet(name, index)


def contact_sheet(name, index):
    sample = index.sample(min(25, len(index)), random_state=0)
    sheet, axes = plt.subplots(5, 5, figsize=(12, 12))
    for a, (_, row) in zip(axes.flat, sample.iterrows()):
        a.imshow(Image.open(TILES / name / row.file), cmap="gray", vmin=0, vmax=255)
        a.set_title(f"{row.coverage:.0%}", fontsize=8)
    for a in axes.flat:
        a.set_axis_off()
    sheet.suptitle(name)
    sheet.tight_layout()
    sheet.savefig(TILES / f"{name}_contact_sheet.png", dpi=100)
    plt.close(sheet)


names = sys.argv[1:] or list(CITIES)
for name in names:
    make_tiles(name)