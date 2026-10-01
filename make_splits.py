from pathlib import Path

import numpy as np
import pandas as pd

from cities import CITIES

TILE_M = 500
STRIDE_M = 250
BLOCK_M = 1000
CAP = 3000
SHARES = {"test": 0.15, "val": 0.15, "train": 0.70}
SEED = 42

TILES = Path("data/tiles")
rng = np.random.default_rng(SEED)


def split_city(name):
    df = pd.read_csv(TILES / name / "index.csv")
    df["file"] = name + "/" + df["file"]

    cx = df.x + TILE_M / 2
    cy = df.y + TILE_M / 2
    df["block"] = (np.floor(cx / BLOCK_M).astype(int).astype(str) + "_"
                   + np.floor(cy / BLOCK_M).astype(int).astype(str))

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

    gx = ((df.x - df.x.min()) / STRIDE_M).round().astype(int)
    gy = ((df.y - df.y.min()) / STRIDE_M).round().astype(int)
    held_out = set(zip(gx[df.split != "train"], gy[df.split != "train"]))

    def overlaps_held_out(i, j):
        return any((i + dx, j + dy) in held_out for dx in (-1, 0, 1) for dy in (-1, 0, 1))

    remove = np.array([s == "train" and overlaps_held_out(i, j)
                       for s, i, j in zip(df.split, gx, gy)])
    df = df[~remove].copy()

    parts = []
    for split, share in SHARES.items():
        s = df[df.split == split]
        limit = int(CAP * share)
        if len(s) > limit:
            s = s.sample(limit, random_state=SEED)
        parts.append(s)
    return pd.concat(parts), int(remove.sum())


all_tiles, removed = [], 0
for name in CITIES:
    if not (TILES / name / "index.csv").exists():
        print(f"{name}: no tiles yet, skipping")
        continue
    part, n = split_city(name)
    all_tiles.append(part)
    removed += n

splits = pd.concat(all_tiles, ignore_index=True)
splits = splits[["file", "city", "split", "block", "x", "y", "coverage"]]
splits.to_csv("data/splits.csv", index=False)

print(f"Training tiles removed by the buffer: {removed}")
print()
print(pd.crosstab(splits.city, splits.split, margins=True, margins_name="total"))

            