import sys
from pathlib import Path

import geopandas as gpd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import osmnx as ox
from shapely.geometry import Point

from cities import CITIES

ox.settings.requests_timeout = 900
ox.settings.overpass_url = "https://overpass.kumi.systems/api" 
OUT_DIR = Path("data/raw")
OUT_DIR.mkdir(parents=True, exist_ok=True)

def get_boundary(spec):
    """Return the area to download as a GeoDataFrame in lat/lon"""
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

def download(name, spec):
    if (OUT_DIR / f"{name}_buildings.gpkg").exists():
        print(f"{name}: already downloaded, skipping")
        return

    print(f"{name}:")
    boundary = get_boundary(spec)

    print(" Downloading buildings...")
    buildings = ox.features_from_polygon(boundary.geometry.iloc[0], tags={"building": True})
    buildings = buildings[buildings.geometry.geom_type.isin(["Polygon", "MultiPolygon"])]
    buildings = buildings[["geometry"]].reset_index(drop=True)
    print(f" {len(buildings):,} building footprints found")

    buildings = ox.projection.project_gdf(buildings)
    boundary = boundary.to_crs(buildings.crs)

    buildings.to_file(OUT_DIR / f"{name}_buildings.gpkg")
    boundary.to_file(OUT_DIR / f"{name}_boundary.gpkg")

    fig, ax = plt.subplots(figsize=(12, 12))
    buildings.plot(ax=ax, color="black", linewidth=0)
    boundary.boundary.plot(ax=ax, color = "red", linewidth=1)
    ax.set_axis_off()
    fig.savefig(OUT_DIR / f"{name}_overview.png", dpi=150, bbox_inches="tight")
    plt.close(fig)
    print(" Saved.")

names = sys.argv[1:] or list(CITIES)
for name in names:
    try:
        download(name, CITIES[name])
    except Exception as e:
        print(f" FAILED: {e}")

