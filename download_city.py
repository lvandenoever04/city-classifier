from pathlib import Path

import matplotlib.pyplot as plt
import osmnx as ox

CITY = "Barcelona, Spain" 
NAME = "barcelona" 
OUT_DIR = Path("data/raw")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Finding the city's boundary polygon
print(f"Looking up boundary for {CITY}...")
boundary = ox.geocode_to_gdf(CITY)
print("Found:", boundary.loc[0, "display_name"])

# Download all the buildings inside that polygon
print("Downloading buildings (may be a few minutes)...")
buildings = ox.features_from_polygon(boundary.geometry.iloc[0], tags={"building": True})
print(f"Downloaded {len(buildings):,} features. Yay!")

# Keep only the shapes with an area greater than zero
buildings = buildings[buildings.geometry.geom_type.isin(["Polygon", "MultiPolygon"])]
buildings = buildings[["geometry"]].reset_index(drop=True)
print(f"Kept {len(buildings):,} building footprints. We're all clean.")

# Project from lat/lon degrees to metres 
buildings = ox.projection.project_gdf(buildings)
boundary = boundary.to_crs(buildings.crs)
print("Projected to:", buildings.crs)

# Save to files
buildings.to_file(OUT_DIR / f"{NAME}_buildings.gpkg")
boundary[["geometry"]].to_file(OUT_DIR / f"{NAME}_boundary.gpkg")

# Create a visual overview 
fig, ax = plt.subplots(figsize=(12, 12))
buildings.plot(ax=ax, color="black", linewidth=0)
boundary.boundary.plot(ax=ax, color="red", linewidth=1)
ax.set_axis_off()
fig.savefig(OUT_DIR / f"{NAME}_overview.png", dpi=150, bbox_inches="tight")
print("Saved overview map.")


