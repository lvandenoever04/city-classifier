from pathlib import Path

import numpy as np
import pandas as pd 

from cities import CITIES

TILE_M = 500
BLOCK_M = 2500
CAP = 1500
SHARES = {"test": 0.15, "val": 0.15, "train": 0.70}
SEED = 42

TILES = Path("data/tiles")
rng = np.random.default_rng(SEED)

def split_city(name):
    df = pd.read_csv(TILES / name / "index.csv")
    df["file"] = name + "/" + df["file"]

    # Find which block each tile's bottom left corner is in
    df["bx"] = np.floor(df.x / BLOCK_M).astype(int)
    df["by"] = np.floor(df.y / BLOCK_M).astype(int)

    # Only keep tiles which lie entirely inside that block
    fits_x = np.floor((df.x + TILE_M - 0.01) / BLOCK_M).astype(int) == df.bx
    fits_y = np.floor((df.y + TILE_M - 0.01) / BLOCK_M).astype(int) == df.by
    df= df[fits_x & fits_y].copy()
    df["block"] = df.bx.astype(str) + "_" + df.by.astype(str)

    # Shuffle + deal blocks 
    counts = df.groupby("block").size()
    blocks = rng.permutation(counts.index.to_numpy())

    total = counts.sum()
    have = {s: 0 for s in SHARES}  
    split_of = {}
    for b in blocks:
        s = max(SHARES, key=lambda s: SHARES[s] * total - have[s])
        split_of[b] = s
        have[s] += counts[b]
    df["split"] = df.block.map(split_of)

    # Cap each split at its share of the total CAP
    parts = []
    for split, share in SHARES.items():
        s = df[df.split == split]
        limit = int(CAP * share)
        if len(s) > limit:
            s = s.sample(limit, random_state=SEED)
        parts.append(s)
    return pd.concat(parts)

all_tiles = []
for name in CITIES:
    if not (TILES / name / "index.csv").exists(): 
        print(f"{name}: no tiles yet, skipping")
        continue
    all_tiles.append(split_city(name))

splits = pd.concat(all_tiles, ignore_index=True)
splits = splits[["file", "city", "split", "block", "x", "y", "coverage"]]
splits.to_csv("data/splits.csv", index=False)

print()
print(pd.crosstab(splits.city, splits.split, margins=True, margins_name="total"))

            