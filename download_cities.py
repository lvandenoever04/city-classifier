import sys
from pathlib import Path

import time
import requests

import geopandas as gpd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import osmnx as ox
import pandas as pd
from osmnx._errors import InsufficientResponseError
from shapely.geometry import Point, box
from tqdm import tqdm

from cities import CITIES

ox.settings.requests_timeout = 180
ox.settings.overpass_url = "https://overpass-api.de/api"
ox.settings.overpass_rate_limit = False
ox.settings.log_console = True

OUT_DIR = Path("data/raw")
OUT_DIR.mkdir(parents=True, exist_ok=True)
CHUNK_M = 5000


def get_boundary(spec):
    if "query" in spec:
        found = ox.geocode_to_gdf(spec["query"])
        print(" Found:", found.loc[0, "display_name"])
        return found[["geometry"]]

    lat, lon = spec["center"]
    point = gpd.GeoDataFrame(geometry=[Point(lon, lat)], crs="EPSG:4326")
    point = ox.projection.project_gdf(point)
    circle = point.buffer(spec["radius_km"] * 1000)
    print(f" Circle of {spec['radius_km']} km around {lat}, {lon}")
    return gpd.GeoDataFrame(geometry=circle, crs=point.crs).to_crs("EPSG:4326")

def fetch_chunk(cell, tries=5):
    for attempt in range(1, tries + 1):
        try:
            return ox.features_from_polygon(cell, tags={"building": True})
        except InsufficientResponseError:
            return None
        except requests.exceptions.ConnectionError:
            if attempt == tries:
                raise
            print(f" connection refused (attempt {attempt}/{tries}), retrying in 30 s")
            time.sleep(30)

def download_buildings(boundary):
    area_m = ox.projection.project_gdf(boundary)
    area = area_m.geometry.iloc[0]
    minx, miny, maxx, maxy = area.bounds
    cells = []
    for x in np.arange(minx, maxx, CHUNK_M):
        for y in np.arange(miny, maxy, CHUNK_M):
            cell = box(x, y, x + CHUNK_M, y + CHUNK_M).intersection(area)
            if cell.geom_type in ("Polygon", "MultiPolygon") and cell.area > 0:
                cells.append(cell)
    cells = gpd.GeoSeries(cells, crs=area_m.crs).to_crs("EPSG:4326")

    parts = []
    total = 0
    progress = tqdm(cells, desc=" chunks", unit="chunk")
    for cell in progress:
        part = fetch_chunk(cell)
        if part is None:
            continue
        part = part[["geometry"]]
        parts.append(part)
        total += len(part)
        progress.set_postfix(buildings=f"{total:,}")

    buildings = pd.concat(parts)
    buildings = buildings[~buildings.index.duplicated()]
    return buildings


def download(name, spec):
    if (OUT_DIR / f"{name}_buildings.gpkg").exists():
        print(f"{name}: already downloaded, skipping")
        return

    print(f"{name}:")
    boundary = get_boundary(spec)

    buildings = download_buildings(boundary)
    buildings = buildings[buildings.geometry.geom_type.isin(["Polygon", "MultiPolygon"])]
    buildings = buildings[["geometry"]].reset_index(drop=True)
    print(f" {len(buildings):,} building footprints found")

    buildings = ox.projection.project_gdf(buildings)
    boundary = boundary.to_crs(buildings.crs)

    buildings.to_file(OUT_DIR / f"{name}_buildings.gpkg")
    boundary.to_file(OUT_DIR / f"{name}_boundary.gpkg")

    fig, ax = plt.subplots(figsize=(12, 12))
    buildings.plot(ax=ax, color="black", linewidth=0)
    boundary.boundary.plot(ax=ax, color="red", linewidth=1)
    ax.set_axis_off()
    fig.savefig(OUT_DIR / f"{name}_overview.png", dpi=150, bbox_inches="tight")
    plt.close(fig)
    print(" Saved.")


if __name__ == "__main__":
    names = sys.argv[1:] or list(CITIES)
    for name in names:
        try:
            download(name, CITIES[name])
        except Exception as e:
            print(f" FAILED: {e}")

