#!/bin/bash
# Rebuild all city data. Run with:  bash rebuild.sh 2>&1 | tee rebuild_log.txt

# city name in cities.py  ->  BBBike file name
declare -A PBF=(
  [amsterdam]=Amsterdam   [bangkok]=Bangkok       [barcelona]=Barcelona
  [beijing]=Beijing       [berlin]=Berlin         [chicago]=Chicago
  [istanbul]=Istanbul     [london]=London         [madrid]=Madrid
  [moscow]=Moscow         [new_york]=NewYork      [paris]=Paris
  [san_francisco]=SanFrancisco  [seoul]=Seoul     [singapore]=Singapore
  [stockholm]=Stockholm   [sydney]=Sydney         [tokyo]=Tokyo
  [vancouver]=Vancouver   [vienna]=Wien
)

for city in "${!PBF[@]}"; do
  file="data/pbf/${PBF[$city]}.osm.pbf"
  if [ ! -f "$file" ]; then
    echo "Downloading $file"
    wget -q -P data/pbf "https://download.bbbike.org/osm/bbbike/${PBF[$city]}/${PBF[$city]}.osm.pbf"
  fi
  python pbf_to_buildings.py "$city" "$file"
done

python make_tiles.py
python make_splits.py
echo "ALL DONE"