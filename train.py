import argparse 
import time
from pathlib import Path
import numpy as np
import pandas as pd
import torch 
import torch.nn as nn

from torch.utils.data import DataLoader, WeightedRandomSampler
from dataset import TileDataset
from model import build_model

parser = argparse.ArgumentParser()
parser.add_argument("--name", default="baseline", help="name for this run's files")
parser.add_argument("--epochs", type=int, default=15)
parser.add_argument("--lr", type=float, default=3e-4)
parser.add_argument("--batch-size", type=int, default=64)
parser.add_argument("--augment", choices=["none", "d4"], default="none", help="d4 = random 90-degree rotations and mirroring")
args = parser.parse_args()

torch.manual_seed(0)
device = "cuda" if torch.cuda.is_available() else "cpu"
print("Device:", device)

train_ds = TileDataset("train")
val_ds = TileDataset("val")
cities = train_ds.cities
n_classes = len(cities)

labels = train_ds.df.city.map(train_ds.city_to_idx).to_numpy()
per_city = np.bincount(labels, minlength=n_classes)
sample_weights = torch.as_tensor(1.0 / per_city[labels], dtype=torch.double)
sampler = WeightedRandomSampler(sample_weights, num_samples=len(labels), replacement=True)

train_dl = DataLoader(train_ds, batch_size=args.batch_size, sampler=sampler, num_workers=6, pin_memory=True, persistent_workers=True)
val_dl = DataLoader(val_ds, batch_size=128, shuffle=False, num_workers=6, pin_memory=True, persistent_workers=True)

def augment_d4(x):
    """Rotate the batch by a random multiple of 90 degrees, and mirror it half the time."""
    k = int(torch.randint(0, 4, (1,)))
    x = torch.rot90(x, k, dims=(2,3))
    if torch.rand(1).item() < 0.5:
        x = x.flip(3)
    return x

def evaluate(model, loader):
    """Loss, accuracy and balanced accuracy (average of per-city accuracies)"""
    model.eval()
    total_loss, preds, targets = 0.0, [], []
    with torch.no_grad():
        for x, y in loader:
            x, y = x.to(device), y.to(device)
            logits = model(x)
            total_loss += loss_fn(logits, y).item() * len(y)
            preds.append(logits.argmax(1).cpu())
            targets.append(y.cpu())
    preds, targets = torch.cat(preds).numpy(), torch.cat(targets).numpy()
    acc = (preds == targets).mean()
    per_city_acc = [(preds[targets == c] == c).mean() for c in range(n_classes)]
    return total_loss / len(targets), acc, float(np.mean(per_city_acc))
    
model = build_model(n_classes).to(device)
loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.AdamW(model.parameters(), lr=args.lr, weight_decay=1e-4)
scheduler = torch.optim.lr_scheduler.OneCycleLR(optimizer, max_lr=args.lr, total_steps=args.epochs * len(train_dl))
Path("checkpoints").mkdir(exist_ok=True)
Path("runs").mkdir(exist_ok=True)
history, best = [], 0.0

for epoch in range(1, args.epochs + 1):
    start = time.time()
    model.train()
    total_loss, correct, seen = 0.0, 0, 0
    for  x, y in train_dl:
        x, y = x.to(device, non_blocking=True), y.to(device, non_blocking=True)
        if args.augment == "d4":
            x = augment_d4(x)
        logits = model(x)
        loss = loss_fn(logits, y)
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        scheduler.step()

        total_loss += loss.item() * len(y)
        correct += (logits.argmax(1) == y).sum().item()
        seen += len(y)

    train_loss, train_acc = total_loss / seen, correct / seen
    val_loss, val_acc, val_bal = evaluate(model, val_dl)

    saved = ""
    if val_bal > best:
        best = val_bal
        torch.save({"model": model.state_dict(), "cities": cities, "args": vars(args), "epoch": epoch, "val_balanced_acc": val_bal}, f"checkpoints/{args.name}.pt")
        saved = "  <- best so far, saved"

    print(f"Epoch {epoch:2d}/{args.epochs} | train loss {train_loss:.3f} acc {train_acc:6.1%} | "f"val loss {val_loss:.3f} acc {val_acc:6.1%} balanced {val_bal:6.1%} | "f"time{time.time() - start:4.0f}s{saved}")
    history.append({"epoch": epoch, "train_loss": train_loss, "train_acc": train_acc,
                    "val_loss": val_loss, "val_acc": val_acc, "val_balanced_acc": val_bal})
    pd.DataFrame(history).to_csv(f"runs/{args.name}_history.csv", index=False)

print(f"Done. Best validation balanced accuracy: {best:.1%}")
