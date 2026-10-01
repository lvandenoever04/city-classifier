# City Classifier

This repository contains a convolutional neural network built in PyTorch that looks at a 500 m × 500 m figure-ground map (black buildings on white space) and guesses which of a selection 20 cities it comes from. 

**Play against it:** [Beat the Model](https://lvandenoever04.github.io/city-classifier/)

## How it works

1. **Data.** Building footprints for 20 cities come from OpenStreetMap, using BBBike city extracts (the OSM API was having issues when I was working on this, but it's worth trying to extract data directly from it since it's easier and your options for adding cities are greater). In order to avoid problems with crazy municipal boundaries, each city is defined by a circle of radius 7km extending from a central point. 
2. **Tiles.** Each circle is cut into 500 m tiles at 256 × 256 px (about 2 m per pixel). Tiles overlap by half (to create more training data), and tiles that are mostly empty are dropped because there simply isn't enough information in them.
3. **Split.** Tiles are grouped into 1 km by 1 km supertiles (to prevent data leakage), and these supertiles go to train, validation or test (70 / 15 / 15). Training tiles that touch a held-out tile are removed. This stops the model from being tested on places it has effectively already seen.
4. **Model.** The model is an ImageNet-pretrained ResNet-18 adapted to one channel. It is trained with class-balanced sampling and random rotations and flips. At prediction time it averages over all 8 rotations and flips (test-time augmentation).

## Results

| | Balanced accuracy |
|---|---|
| Validation | 86.4% |
| Test | 84.9% |

The easiest cities were Beijing, London and Chicago (about 97%). The hardest were Barcelona, Seoul and Sydney (70–75%). The most common mix-ups were Madrid ↔ Barcelona, Vienna ↔ Berlin and Seoul → Tokyo. This is not perfect of course, but I think it's pretty good considering random guessing would get 5%! 

Somewhat regrettably, city list leans exclusively towards Europe, North America and East Asia. That's because OpenStreetMap building coverage is much patchier elsewhere. I originally had Delhi, Mexico City, Buenos Aires and Mumbai in the list, but I had to swap them out with several North American cities with better data. 

## Running it yourself

```bash
git clone https://github.com/lvandenoever04/city-classifier.git
cd city-classifier
python -m venv .venv && source .venv/bin/activate
pip install torch torchvision geopandas pyogrio osmnx matplotlib pandas scikit-learn pillow
```

Then run the pipeline in order:

```bash
bash rebuild.sh                                   # download cities, extract buildings, make tiles and splits
python train.py --name d4_small --augment d4      # train
python evaluate.py --checkpoint checkpoints/d4_small.pt --split test --tta
python export_game.py                             # rebuild the game in docs/
```

## Files

| File | What it does |
|---|---|
| `cities.py` | City centres and radius |
| `pbf_to_buildings.py` | Extracts building footprints from a BBBike `.osm.pbf` file |
| `make_tiles.py` | Cuts each city into figure-ground tiles |
| `make_splits.py` | Spatial train / val / test split |
| `dataset.py`, `model.py` | PyTorch dataset and ResNet-18 model |
| `train.py`, `evaluate.py` | Training and evaluation |
| `show_predictions.py`, `gradcam.py` | Visualising predictions and what the model looks at |
| `export_game.py`, `docs/` | The Beat the Model web game |

## Credits

Building data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), available under the ODbL, via [BBBike extracts](https://extract.bbbike.org/).
