import argparse
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import geopandas as gpd
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import torch
from PIL import Image

from dataset import TILES, TileDataset
from model import build_model

TILE_M = 500
GREEN, RED = "#2e7d32", "#c62828"

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--city", required=True)
    parser.add_argument("--checkpoint", default="checkpoints/d4.pt")
    parser.add_argument("--split", choices=["val", "test"], default="val")
    parser.add_argument("--n", type=int, default=25, help="how many tiles to show")
    parser.add_argument("--mistakes", action="store_true", help="show only wrongly predicted tiles")
    args = parser.parse_args()

    device = "cuda" if torch.cuda.is_available() else "cpu"
    ckpt = torch.load(args.checkpoint, map_location=device)
    cities = ckpt["cities"]
    if args.city not in cities:
        raise SystemExit(f"Unknown city '{args.city}'. Choose from: {', '.join(cities)}")
    model = build_model(len(cities), pretrained=False).to(device)
    model.load_state_dict(ckpt["model"])
    model.eval()

    ds = TileDataset(args.split)
    idx = np.flatnonzero(ds.df.city.to_numpy() == args.city)
    x = torch.stack([ds[i][0] for i in idx])
    with torch.no_grad():
        probs = torch.cat([model(b.to(device)).softmax(1).cpu() for b in x.split(128)])
    conf, pred = probs.max(1)

    sub = ds.df.iloc[idx].copy()
    sub["pred_city"] = [cities[p] for p in pred.tolist()]
    sub["conf"] = conf.numpy()
    sub["correct"] = sub.pred_city == args.city

    print(f"{args.city}, {args.split}: {len(sub)} tiles, {sub.correct.mean():.1%} correct")
    print("\nWhat the model predicted for them:")
    print(sub.pred_city.value_counts().to_string())

    out = Path("results")
    out.mkdir(exist_ok=True)
    name = f"{Path(args.checkpoint).stem}_{args.city}_{args.split}"

    show = sub[~sub.correct] if args.mistakes else sub
    if len(show) == 0:
        print("\nNo tiles to show (no mistakes!).")
    else:
        show = show.sample(min(args.n, len(show)), random_state=0)
        cols = 5
        rows = int(np.ceil(len(show) / cols))
        fig, axes = plt.subplots(rows, cols, figsize=(cols * 2.6, rows * 2.9), squeeze=False)
        for a in axes.flat:
            a.set_axis_off()
        for a, (_, r) in zip(axes.flat, show.iterrows()):
            a.imshow(Image.open(TILES / r.file), cmap="gray", vmin=0, vmax=255)
            mark = "✓" if r.correct else "✗"
            a.set_title(f"{mark} {r.pred_city} {r.conf:.0%}", fontsize=9,
                        color=GREEN if r.correct else RED)
        which = "mistakes only" if args.mistakes else "random sample"
        fig.suptitle(f"{args.city} - {args.split} tiles ({which}); title = model's guess and confidence")
        fig.tight_layout()
        fig.savefig(out / f"{name}_tiles{'_mistakes' if args.mistakes else ''}.png", dpi=120)
        plt.close(fig)

    everything = pd.read_csv("data/splits.csv")
    everything = everything[(everything.city == args.city) & (everything.split != args.split)]
    boundary = gpd.read_file(f"data/raw/{args.city}_boundary.gpkg")
    half = TILE_M / 2  

    fig, ax = plt.subplots(figsize=(9, 9))
    boundary.boundary.plot(ax=ax, color="black", linewidth=1)
    ax.scatter(everything.x + half, everything.y + half, s=6, color="lightgrey",
               label="other tiles (train / other split)")
    right, wrong = sub[sub.correct], sub[~sub.correct]
    ax.scatter(right.x + half, right.y + half, s=14, color=GREEN, marker="o",
               label=f"{args.split}: correct ({len(right)})")
    ax.scatter(wrong.x + half, wrong.y + half, s=24, color=RED, marker="x",
               label=f"{args.split}: wrong ({len(wrong)})")
    ax.set_aspect("equal")
    ax.set_axis_off()
    ax.legend(loc="lower left")
    ax.set_title(f"{args.city}: where the {args.split} tiles are, and which were predicted correctly")
    fig.tight_layout()
    fig.savefig(out / f"{name}_map.png", dpi=120)
    plt.close(fig)

    print(f"\nSaved pictures to {out}/ (names starting with {name})")