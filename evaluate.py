import argparse 
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import torch
from sklearn.metrics import confusion_matrix
from torch.utils.data import DataLoader

from dataset import TileDataset
from model import build_model

def predict(model, x, tta=False):
    """City probabilities for a batch; with tta, averaged over all 8 rotations/mirrors."""
    if not tta:
        return model(x).softmax(1)
    total = 0
    for k in range(4):
        for mirror in (False, True):
            view = torch.rot90(x, k, dims=(2, 3))
            if mirror:
                view = view.flip(3)
            total = total + model(view).softmax(1)
    return total / 8

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--checkpoint", default="checkpoints/d4.pt")
    parser.add_argument("--split", choices=["val", "test"], default="val")
    parser.add_argument("--tta", action="store_true", help="average over 8 rotations/mirrors")
    args = parser.parse_args()

    device = "cuda" if torch.cuda.is_available() else  "cpu"

    ckpt = torch.load(args.checkpoint, map_location=device)
    cities = ckpt["cities"]
    model = build_model(len(cities), pretrained=False).to(device)
    model.load_state_dict(ckpt["model"])
    model.eval()
    print(f"Loaded {args.checkpoint} (epoch {ckpt['epoch']}, "f"val balanced acc {ckpt['val_balanced_acc']:.1%})")

    ds = TileDataset(args.split)
    assert ds.cities == cities, "The data's city list doesn't match the model's!"
    loader = DataLoader(ds, batch_size=128, shuffle=False, num_workers=6)

    preds, targets = [], []
    with torch.no_grad():
        for x, y in loader:
            probs = predict(model, x.to(device), args.tta)
            preds.append(probs.argmax(1).cpu())
            targets.append(y)
    preds = torch.cat(preds).numpy()
    targets = torch.cat(targets).numpy()

    acc = (preds == targets).mean()
    per_city = np.array([(preds[targets == c] == c).mean() for c in range(len(cities))])
    print(f"\n{args.split} set: {len(targets)} tiles")
    print(f"Accuracy: {acc:.1%}")
    print(f"Balanced accuracy: {per_city.mean():.1%}")   

    cm = confusion_matrix(targets, preds, labels=range(len(cities)))
    cm_pct = cm / cm.sum(axis=1, keepdims=True)

    rows = []
    for c, city in enumerate(cities):
        mistakes = cm_pct[c].copy()
        mistakes[c] = 0 
        worst = mistakes.argmax()
        rows.append({"city": city, "tiles": cm[c].sum(), "accuracy": per_city[c], "most often mistaken for": cities[worst], "how often": mistakes[worst]})
    table = pd.DataFrame(rows).sort_values("accuracy", ascending=False)
    pct = "{:.1%}".format
    print("\n" + table.to_string(index=False, formatters={"accuracy": pct, "how often": pct}))

    out = Path("results")
    out.mkdir(exist_ok=True)
    name = f"{Path(args.checkpoint).stem}_{args.split}{'_tta' if args.tta else ''}"
    table.to_csv(out / f"{name}_per_city.csv", index=False)

    fig, ax = plt.subplots(figsize=(11, 10))
    im = ax.imshow(cm_pct, cmap="Blues", vmin=0, vmax=1)
    ax.set_xticks(range(len(cities)), cities, rotation=90)
    ax.set_yticks(range(len(cities)), cities)
    ax.set_xlabel("Predicted city")
    ax.set_ylabel("True city")

    for i in range(len(cities)):
        for j in range(len(cities)):
            v = cm_pct[i, j]
            if v >= 0.02:
                ax.text(j, i, f"{v * 100:.0f}", ha="center", va="center", fontsize=7, color="white" if v > 0.5 else "black")
    ax.set_title(f"Confusion matrix - {args.split} set, balanced accuracy {per_city.mean():.1%}\n" "each row = one true city; numbers = % of its tiles")
    fig.colorbar(im, ax=ax, fraction=0.046, label="share of the true city's tiles")
    fig.tight_layout()
    fig.savefig(out / f"{name}_confusion.png", dpi=150)
    print(f"\nSaved {out / name}_confusion.png and {out / name}_per_city.csv")



    
