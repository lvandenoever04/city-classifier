from pathlib import Path

import numpy as np
import pandas as pd
import torch
from PIL import Image
from torch.utils.data import DataLoader, Dataset

TILES = Path("data/tiles")


class TileDataset(Dataset):
    def __init__(self, split, splits_csv="data/splits.csv"):
        df = pd.read_csv(splits_csv)
      
        self.cities = sorted(df.city.unique())
        self.city_to_idx = {city: i for i, city in enumerate(self.cities)}
        self.df = df[df.split == split].reset_index(drop=True)

    def __len__(self):
        return len(self.df)

    def __getitem__(self, i):
        row = self.df.iloc[i]
        img = Image.open(TILES / row.file)                         
        pixels = np.array(img, dtype=np.float32) / 255.0           
        x = torch.from_numpy(pixels).unsqueeze(0)                 
        y = self.city_to_idx[row.city]                             
        return x, y


if __name__ == "__main__":
    import time

    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    train = TileDataset("train")
    print("Cities:", train.cities)
    print("Training tiles:", len(train))

    x, y = train[0]
    print("One tile:", x.shape, x.dtype, "min", x.min().item(), "max", x.max().item())
    print("Its label:", y, "=", train.cities[y])

    loader = DataLoader(train, batch_size=64, shuffle=True, num_workers=4)
    xb, yb = next(iter(loader))
    print("One batch:", xb.shape, yb.shape)

    start = time.time()
    for xb, yb in loader:
        pass
    print(f"Full pass over the training set: {time.time() - start:.1f} s")

    # Show 16 tiles from a batch with their labels, to check they match
    fig, axes = plt.subplots(4, 4, figsize=(10, 10))
    for ax, img, label in zip(axes.flat, xb, yb):
        ax.imshow(img[0], cmap="gray", vmin=0, vmax=1)
        ax.set_title(train.cities[label], fontsize=9)
        ax.set_axis_off()
    fig.tight_layout()
    fig.savefig("data/batch_preview.png", dpi=100)
    print("Saved data/batch_preview.png")
