import sys
from pathlib import Path

import geopandas as gpd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import osmnx as ox
from shapely.geometry import box

from cities import CITIES
from download_cities import get_boundary

OUT_DIR = Path("data/raw")
OUT_DIR.mkdir(parents=True, exist_ok=True)

name, pbf_path = sys.argv[1], sys.argv[2]
print(f"{name}:")
boundary = get_boundary(CITIES[name])
area = boundary.geometry.iloc[0]

print(f" Reading buildings from {pbf_path} (can take a minute or two)...")
buildings = gpd.read_file(
    pbf_path,
    layer="multipolygons",
    columns=["building"],
    where="building IS NOT NULL",
)
print(f" {len(buildings):,} buildings in the file")

# Check that the file actually covers the whole city
covered = area.intersection(box(*buildings.total_bounds)).area / area.area
print(f" File covers {covered:.0%} of the city boundary")
if covered < 0.98:
    print(" WARNING: the file doesn't cover the whole city - tiles near the edge will look empty")

# Keep only buildings that touch the city boundary
idx = buildings.sindex.query(area, predicate="intersects")
buildings = buildings.iloc[idx][["geometry"]].reset_index(drop=True)
print(f" {len(buildings):,} building footprints inside the boundary")

utm = boundary.estimate_utm_crs()
buildings = buildings.to_crs(utm)
boundary = boundary.to_crs(utm)

buildings.to_file(OUT_DIR / f"{name}_buildings.gpkg")
boundary.to_file(OUT_DIR / f"{name}_boundary.gpkg")

fig, ax = plt.subplots(figsize=(12, 12))
buildings.plot(ax=ax, color="black", linewidth=0)
boundary.boundary.plot(ax=ax, color="red", linewidth=1)
ax.set_axis_off()
fig.savefig(OUT_DIR / f"{name}_overview.png", dpi=150, bbox_inches="tight")
plt.close(fig)
print(" Saved.")