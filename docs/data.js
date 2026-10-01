const CITIES = ["amsterdam", "bangkok", "barcelona", "beijing", "berlin", "chicago", "istanbul", "london", "madrid", "moscow", "new_york", "paris", "san_francisco", "seoul", "singapore", "stockholm", "sydney", "tokyo", "vancouver", "vienna"];
const ROUNDS = [
 {
  "tiles": {
   "hard": "tiles/000_hard.png",
   "medium": "tiles/000_medium.png",
   "easy": "tiles/000_easy.png"
  },
  "answer": "amsterdam",
  "model": "amsterdam",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/001_hard.png",
   "medium": "tiles/001_medium.png",
   "easy": "tiles/001_easy.png"
  },
  "answer": "amsterdam",
  "model": "amsterdam",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/002_hard.png",
   "medium": "tiles/002_medium.png",
   "easy": "tiles/002_easy.png"
  },
  "answer": "amsterdam",
  "model": "amsterdam",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/003_hard.png",
   "medium": "tiles/003_medium.png",
   "easy": "tiles/003_easy.png"
  },
  "answer": "amsterdam",
  "model": "amsterdam",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/004_hard.png",
   "medium": "tiles/004_medium.png",
   "easy": "tiles/004_easy.png"
  },
  "answer": "amsterdam",
  "model": "moscow",
  "confidence": 0.455
 },
 {
  "tiles": {
   "hard": "tiles/005_hard.png",
   "medium": "tiles/005_medium.png",
   "easy": "tiles/005_easy.png"
  },
  "answer": "amsterdam",
  "model": "amsterdam",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/006_hard.png",
   "medium": "tiles/006_medium.png",
   "easy": "tiles/006_easy.png"
  },
  "answer": "amsterdam",
  "model": "amsterdam",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/007_hard.png",
   "medium": "tiles/007_medium.png",
   "easy": "tiles/007_easy.png"
  },
  "answer": "amsterdam",
  "model": "new_york",
  "confidence": 0.556
 },
 {
  "tiles": {
   "hard": "tiles/008_hard.png",
   "medium": "tiles/008_medium.png",
   "easy": "tiles/008_easy.png"
  },
  "answer": "amsterdam",
  "model": "amsterdam",
  "confidence": 0.995
 },
 {
  "tiles": {
   "hard": "tiles/009_hard.png",
   "medium": "tiles/009_medium.png",
   "easy": "tiles/009_easy.png"
  },
  "answer": "amsterdam",
  "model": "amsterdam",
  "confidence": 0.77
 },
 {
  "tiles": {
   "hard": "tiles/010_hard.png",
   "medium": "tiles/010_medium.png",
   "easy": "tiles/010_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/011_hard.png",
   "medium": "tiles/011_medium.png",
   "easy": "tiles/011_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/012_hard.png",
   "medium": "tiles/012_medium.png",
   "easy": "tiles/012_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 0.933
 },
 {
  "tiles": {
   "hard": "tiles/013_hard.png",
   "medium": "tiles/013_medium.png",
   "easy": "tiles/013_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 0.985
 },
 {
  "tiles": {
   "hard": "tiles/014_hard.png",
   "medium": "tiles/014_medium.png",
   "easy": "tiles/014_easy.png"
  },
  "answer": "bangkok",
  "model": "singapore",
  "confidence": 0.577
 },
 {
  "tiles": {
   "hard": "tiles/015_hard.png",
   "medium": "tiles/015_medium.png",
   "easy": "tiles/015_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 0.996
 },
 {
  "tiles": {
   "hard": "tiles/016_hard.png",
   "medium": "tiles/016_medium.png",
   "easy": "tiles/016_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 0.531
 },
 {
  "tiles": {
   "hard": "tiles/017_hard.png",
   "medium": "tiles/017_medium.png",
   "easy": "tiles/017_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/018_hard.png",
   "medium": "tiles/018_medium.png",
   "easy": "tiles/018_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/019_hard.png",
   "medium": "tiles/019_medium.png",
   "easy": "tiles/019_easy.png"
  },
  "answer": "bangkok",
  "model": "bangkok",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/020_hard.png",
   "medium": "tiles/020_medium.png",
   "easy": "tiles/020_easy.png"
  },
  "answer": "barcelona",
  "model": "barcelona",
  "confidence": 0.841
 },
 {
  "tiles": {
   "hard": "tiles/021_hard.png",
   "medium": "tiles/021_medium.png",
   "easy": "tiles/021_easy.png"
  },
  "answer": "barcelona",
  "model": "barcelona",
  "confidence": 0.855
 },
 {
  "tiles": {
   "hard": "tiles/022_hard.png",
   "medium": "tiles/022_medium.png",
   "easy": "tiles/022_easy.png"
  },
  "answer": "barcelona",
  "model": "madrid",
  "confidence": 0.672
 },
 {
  "tiles": {
   "hard": "tiles/023_hard.png",
   "medium": "tiles/023_medium.png",
   "easy": "tiles/023_easy.png"
  },
  "answer": "barcelona",
  "model": "madrid",
  "confidence": 0.399
 },
 {
  "tiles": {
   "hard": "tiles/024_hard.png",
   "medium": "tiles/024_medium.png",
   "easy": "tiles/024_easy.png"
  },
  "answer": "barcelona",
  "model": "barcelona",
  "confidence": 0.406
 },
 {
  "tiles": {
   "hard": "tiles/025_hard.png",
   "medium": "tiles/025_medium.png",
   "easy": "tiles/025_easy.png"
  },
  "answer": "barcelona",
  "model": "barcelona",
  "confidence": 0.632
 },
 {
  "tiles": {
   "hard": "tiles/026_hard.png",
   "medium": "tiles/026_medium.png",
   "easy": "tiles/026_easy.png"
  },
  "answer": "barcelona",
  "model": "istanbul",
  "confidence": 0.858
 },
 {
  "tiles": {
   "hard": "tiles/027_hard.png",
   "medium": "tiles/027_medium.png",
   "easy": "tiles/027_easy.png"
  },
  "answer": "barcelona",
  "model": "seoul",
  "confidence": 0.63
 },
 {
  "tiles": {
   "hard": "tiles/028_hard.png",
   "medium": "tiles/028_medium.png",
   "easy": "tiles/028_easy.png"
  },
  "answer": "barcelona",
  "model": "barcelona",
  "confidence": 0.535
 },
 {
  "tiles": {
   "hard": "tiles/029_hard.png",
   "medium": "tiles/029_medium.png",
   "easy": "tiles/029_easy.png"
  },
  "answer": "barcelona",
  "model": "barcelona",
  "confidence": 0.998
 },
 {
  "tiles": {
   "hard": "tiles/030_hard.png",
   "medium": "tiles/030_medium.png",
   "easy": "tiles/030_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 0.998
 },
 {
  "tiles": {
   "hard": "tiles/031_hard.png",
   "medium": "tiles/031_medium.png",
   "easy": "tiles/031_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/032_hard.png",
   "medium": "tiles/032_medium.png",
   "easy": "tiles/032_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/033_hard.png",
   "medium": "tiles/033_medium.png",
   "easy": "tiles/033_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/034_hard.png",
   "medium": "tiles/034_medium.png",
   "easy": "tiles/034_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/035_hard.png",
   "medium": "tiles/035_medium.png",
   "easy": "tiles/035_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 0.729
 },
 {
  "tiles": {
   "hard": "tiles/036_hard.png",
   "medium": "tiles/036_medium.png",
   "easy": "tiles/036_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/037_hard.png",
   "medium": "tiles/037_medium.png",
   "easy": "tiles/037_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 0.993
 },
 {
  "tiles": {
   "hard": "tiles/038_hard.png",
   "medium": "tiles/038_medium.png",
   "easy": "tiles/038_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 0.784
 },
 {
  "tiles": {
   "hard": "tiles/039_hard.png",
   "medium": "tiles/039_medium.png",
   "easy": "tiles/039_easy.png"
  },
  "answer": "beijing",
  "model": "beijing",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/040_hard.png",
   "medium": "tiles/040_medium.png",
   "easy": "tiles/040_easy.png"
  },
  "answer": "berlin",
  "model": "stockholm",
  "confidence": 0.687
 },
 {
  "tiles": {
   "hard": "tiles/041_hard.png",
   "medium": "tiles/041_medium.png",
   "easy": "tiles/041_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.883
 },
 {
  "tiles": {
   "hard": "tiles/042_hard.png",
   "medium": "tiles/042_medium.png",
   "easy": "tiles/042_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.994
 },
 {
  "tiles": {
   "hard": "tiles/043_hard.png",
   "medium": "tiles/043_medium.png",
   "easy": "tiles/043_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.935
 },
 {
  "tiles": {
   "hard": "tiles/044_hard.png",
   "medium": "tiles/044_medium.png",
   "easy": "tiles/044_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/045_hard.png",
   "medium": "tiles/045_medium.png",
   "easy": "tiles/045_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/046_hard.png",
   "medium": "tiles/046_medium.png",
   "easy": "tiles/046_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.998
 },
 {
  "tiles": {
   "hard": "tiles/047_hard.png",
   "medium": "tiles/047_medium.png",
   "easy": "tiles/047_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.96
 },
 {
  "tiles": {
   "hard": "tiles/048_hard.png",
   "medium": "tiles/048_medium.png",
   "easy": "tiles/048_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.843
 },
 {
  "tiles": {
   "hard": "tiles/049_hard.png",
   "medium": "tiles/049_medium.png",
   "easy": "tiles/049_easy.png"
  },
  "answer": "berlin",
  "model": "berlin",
  "confidence": 0.995
 },
 {
  "tiles": {
   "hard": "tiles/050_hard.png",
   "medium": "tiles/050_medium.png",
   "easy": "tiles/050_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/051_hard.png",
   "medium": "tiles/051_medium.png",
   "easy": "tiles/051_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 0.858
 },
 {
  "tiles": {
   "hard": "tiles/052_hard.png",
   "medium": "tiles/052_medium.png",
   "easy": "tiles/052_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/053_hard.png",
   "medium": "tiles/053_medium.png",
   "easy": "tiles/053_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 0.998
 },
 {
  "tiles": {
   "hard": "tiles/054_hard.png",
   "medium": "tiles/054_medium.png",
   "easy": "tiles/054_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/055_hard.png",
   "medium": "tiles/055_medium.png",
   "easy": "tiles/055_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/056_hard.png",
   "medium": "tiles/056_medium.png",
   "easy": "tiles/056_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/057_hard.png",
   "medium": "tiles/057_medium.png",
   "easy": "tiles/057_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/058_hard.png",
   "medium": "tiles/058_medium.png",
   "easy": "tiles/058_easy.png"
  },
  "answer": "chicago",
  "model": "sydney",
  "confidence": 0.83
 },
 {
  "tiles": {
   "hard": "tiles/059_hard.png",
   "medium": "tiles/059_medium.png",
   "easy": "tiles/059_easy.png"
  },
  "answer": "chicago",
  "model": "chicago",
  "confidence": 0.998
 },
 {
  "tiles": {
   "hard": "tiles/060_hard.png",
   "medium": "tiles/060_medium.png",
   "easy": "tiles/060_easy.png"
  },
  "answer": "istanbul",
  "model": "istanbul",
  "confidence": 0.985
 },
 {
  "tiles": {
   "hard": "tiles/061_hard.png",
   "medium": "tiles/061_medium.png",
   "easy": "tiles/061_easy.png"
  },
  "answer": "istanbul",
  "model": "istanbul",
  "confidence": 0.527
 },
 {
  "tiles": {
   "hard": "tiles/062_hard.png",
   "medium": "tiles/062_medium.png",
   "easy": "tiles/062_easy.png"
  },
  "answer": "istanbul",
  "model": "istanbul",
  "confidence": 0.87
 },
 {
  "tiles": {
   "hard": "tiles/063_hard.png",
   "medium": "tiles/063_medium.png",
   "easy": "tiles/063_easy.png"
  },
  "answer": "istanbul",
  "model": "istanbul",
  "confidence": 0.996
 },
 {
  "tiles": {
   "hard": "tiles/064_hard.png",
   "medium": "tiles/064_medium.png",
   "easy": "tiles/064_easy.png"
  },
  "answer": "istanbul",
  "model": "istanbul",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/065_hard.png",
   "medium": "tiles/065_medium.png",
   "easy": "tiles/065_easy.png"
  },
  "answer": "istanbul",
  "model": "istanbul",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/066_hard.png",
   "medium": "tiles/066_medium.png",
   "easy": "tiles/066_easy.png"
  },
  "answer": "istanbul",
  "model": "seoul",
  "confidence": 0.926
 },
 {
  "tiles": {
   "hard": "tiles/067_hard.png",
   "medium": "tiles/067_medium.png",
   "easy": "tiles/067_easy.png"
  },
  "answer": "istanbul",
  "model": "istanbul",
  "confidence": 0.585
 },
 {
  "tiles": {
   "hard": "tiles/068_hard.png",
   "medium": "tiles/068_medium.png",
   "easy": "tiles/068_easy.png"
  },
  "answer": "istanbul",
  "model": "bangkok",
  "confidence": 0.489
 },
 {
  "tiles": {
   "hard": "tiles/069_hard.png",
   "medium": "tiles/069_medium.png",
   "easy": "tiles/069_easy.png"
  },
  "answer": "istanbul",
  "model": "sydney",
  "confidence": 0.498
 },
 {
  "tiles": {
   "hard": "tiles/070_hard.png",
   "medium": "tiles/070_medium.png",
   "easy": "tiles/070_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 0.652
 },
 {
  "tiles": {
   "hard": "tiles/071_hard.png",
   "medium": "tiles/071_medium.png",
   "easy": "tiles/071_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 0.789
 },
 {
  "tiles": {
   "hard": "tiles/072_hard.png",
   "medium": "tiles/072_medium.png",
   "easy": "tiles/072_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 0.929
 },
 {
  "tiles": {
   "hard": "tiles/073_hard.png",
   "medium": "tiles/073_medium.png",
   "easy": "tiles/073_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/074_hard.png",
   "medium": "tiles/074_medium.png",
   "easy": "tiles/074_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/075_hard.png",
   "medium": "tiles/075_medium.png",
   "easy": "tiles/075_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 0.872
 },
 {
  "tiles": {
   "hard": "tiles/076_hard.png",
   "medium": "tiles/076_medium.png",
   "easy": "tiles/076_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 0.498
 },
 {
  "tiles": {
   "hard": "tiles/077_hard.png",
   "medium": "tiles/077_medium.png",
   "easy": "tiles/077_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 0.8
 },
 {
  "tiles": {
   "hard": "tiles/078_hard.png",
   "medium": "tiles/078_medium.png",
   "easy": "tiles/078_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 0.993
 },
 {
  "tiles": {
   "hard": "tiles/079_hard.png",
   "medium": "tiles/079_medium.png",
   "easy": "tiles/079_easy.png"
  },
  "answer": "london",
  "model": "london",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/080_hard.png",
   "medium": "tiles/080_medium.png",
   "easy": "tiles/080_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/081_hard.png",
   "medium": "tiles/081_medium.png",
   "easy": "tiles/081_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/082_hard.png",
   "medium": "tiles/082_medium.png",
   "easy": "tiles/082_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 0.826
 },
 {
  "tiles": {
   "hard": "tiles/083_hard.png",
   "medium": "tiles/083_medium.png",
   "easy": "tiles/083_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 0.902
 },
 {
  "tiles": {
   "hard": "tiles/084_hard.png",
   "medium": "tiles/084_medium.png",
   "easy": "tiles/084_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 0.855
 },
 {
  "tiles": {
   "hard": "tiles/085_hard.png",
   "medium": "tiles/085_medium.png",
   "easy": "tiles/085_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/086_hard.png",
   "medium": "tiles/086_medium.png",
   "easy": "tiles/086_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/087_hard.png",
   "medium": "tiles/087_medium.png",
   "easy": "tiles/087_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 0.968
 },
 {
  "tiles": {
   "hard": "tiles/088_hard.png",
   "medium": "tiles/088_medium.png",
   "easy": "tiles/088_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/089_hard.png",
   "medium": "tiles/089_medium.png",
   "easy": "tiles/089_easy.png"
  },
  "answer": "madrid",
  "model": "madrid",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/090_hard.png",
   "medium": "tiles/090_medium.png",
   "easy": "tiles/090_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 0.985
 },
 {
  "tiles": {
   "hard": "tiles/091_hard.png",
   "medium": "tiles/091_medium.png",
   "easy": "tiles/091_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/092_hard.png",
   "medium": "tiles/092_medium.png",
   "easy": "tiles/092_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/093_hard.png",
   "medium": "tiles/093_medium.png",
   "easy": "tiles/093_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 0.428
 },
 {
  "tiles": {
   "hard": "tiles/094_hard.png",
   "medium": "tiles/094_medium.png",
   "easy": "tiles/094_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/095_hard.png",
   "medium": "tiles/095_medium.png",
   "easy": "tiles/095_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/096_hard.png",
   "medium": "tiles/096_medium.png",
   "easy": "tiles/096_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/097_hard.png",
   "medium": "tiles/097_medium.png",
   "easy": "tiles/097_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/098_hard.png",
   "medium": "tiles/098_medium.png",
   "easy": "tiles/098_easy.png"
  },
  "answer": "moscow",
  "model": "moscow",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/099_hard.png",
   "medium": "tiles/099_medium.png",
   "easy": "tiles/099_easy.png"
  },
  "answer": "moscow",
  "model": "berlin",
  "confidence": 0.613
 },
 {
  "tiles": {
   "hard": "tiles/100_hard.png",
   "medium": "tiles/100_medium.png",
   "easy": "tiles/100_easy.png"
  },
  "answer": "new_york",
  "model": "new_york",
  "confidence": 0.601
 },
 {
  "tiles": {
   "hard": "tiles/101_hard.png",
   "medium": "tiles/101_medium.png",
   "easy": "tiles/101_easy.png"
  },
  "answer": "new_york",
  "model": "new_york",
  "confidence": 0.877
 },
 {
  "tiles": {
   "hard": "tiles/102_hard.png",
   "medium": "tiles/102_medium.png",
   "easy": "tiles/102_easy.png"
  },
  "answer": "new_york",
  "model": "stockholm",
  "confidence": 0.316
 },
 {
  "tiles": {
   "hard": "tiles/103_hard.png",
   "medium": "tiles/103_medium.png",
   "easy": "tiles/103_easy.png"
  },
  "answer": "new_york",
  "model": "new_york",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/104_hard.png",
   "medium": "tiles/104_medium.png",
   "easy": "tiles/104_easy.png"
  },
  "answer": "new_york",
  "model": "new_york",
  "confidence": 0.996
 },
 {
  "tiles": {
   "hard": "tiles/105_hard.png",
   "medium": "tiles/105_medium.png",
   "easy": "tiles/105_easy.png"
  },
  "answer": "new_york",
  "model": "new_york",
  "confidence": 0.968
 },
 {
  "tiles": {
   "hard": "tiles/106_hard.png",
   "medium": "tiles/106_medium.png",
   "easy": "tiles/106_easy.png"
  },
  "answer": "new_york",
  "model": "new_york",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/107_hard.png",
   "medium": "tiles/107_medium.png",
   "easy": "tiles/107_easy.png"
  },
  "answer": "new_york",
  "model": "barcelona",
  "confidence": 0.291
 },
 {
  "tiles": {
   "hard": "tiles/108_hard.png",
   "medium": "tiles/108_medium.png",
   "easy": "tiles/108_easy.png"
  },
  "answer": "new_york",
  "model": "new_york",
  "confidence": 0.996
 },
 {
  "tiles": {
   "hard": "tiles/109_hard.png",
   "medium": "tiles/109_medium.png",
   "easy": "tiles/109_easy.png"
  },
  "answer": "new_york",
  "model": "new_york",
  "confidence": 0.99
 },
 {
  "tiles": {
   "hard": "tiles/110_hard.png",
   "medium": "tiles/110_medium.png",
   "easy": "tiles/110_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/111_hard.png",
   "medium": "tiles/111_medium.png",
   "easy": "tiles/111_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/112_hard.png",
   "medium": "tiles/112_medium.png",
   "easy": "tiles/112_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 0.993
 },
 {
  "tiles": {
   "hard": "tiles/113_hard.png",
   "medium": "tiles/113_medium.png",
   "easy": "tiles/113_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/114_hard.png",
   "medium": "tiles/114_medium.png",
   "easy": "tiles/114_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/115_hard.png",
   "medium": "tiles/115_medium.png",
   "easy": "tiles/115_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 0.971
 },
 {
  "tiles": {
   "hard": "tiles/116_hard.png",
   "medium": "tiles/116_medium.png",
   "easy": "tiles/116_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 0.933
 },
 {
  "tiles": {
   "hard": "tiles/117_hard.png",
   "medium": "tiles/117_medium.png",
   "easy": "tiles/117_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/118_hard.png",
   "medium": "tiles/118_medium.png",
   "easy": "tiles/118_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/119_hard.png",
   "medium": "tiles/119_medium.png",
   "easy": "tiles/119_easy.png"
  },
  "answer": "paris",
  "model": "paris",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/120_hard.png",
   "medium": "tiles/120_medium.png",
   "easy": "tiles/120_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/121_hard.png",
   "medium": "tiles/121_medium.png",
   "easy": "tiles/121_easy.png"
  },
  "answer": "san_francisco",
  "model": "bangkok",
  "confidence": 0.362
 },
 {
  "tiles": {
   "hard": "tiles/122_hard.png",
   "medium": "tiles/122_medium.png",
   "easy": "tiles/122_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 0.48
 },
 {
  "tiles": {
   "hard": "tiles/123_hard.png",
   "medium": "tiles/123_medium.png",
   "easy": "tiles/123_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/124_hard.png",
   "medium": "tiles/124_medium.png",
   "easy": "tiles/124_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 0.998
 },
 {
  "tiles": {
   "hard": "tiles/125_hard.png",
   "medium": "tiles/125_medium.png",
   "easy": "tiles/125_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/126_hard.png",
   "medium": "tiles/126_medium.png",
   "easy": "tiles/126_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 0.992
 },
 {
  "tiles": {
   "hard": "tiles/127_hard.png",
   "medium": "tiles/127_medium.png",
   "easy": "tiles/127_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 0.99
 },
 {
  "tiles": {
   "hard": "tiles/128_hard.png",
   "medium": "tiles/128_medium.png",
   "easy": "tiles/128_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/129_hard.png",
   "medium": "tiles/129_medium.png",
   "easy": "tiles/129_easy.png"
  },
  "answer": "san_francisco",
  "model": "san_francisco",
  "confidence": 0.996
 },
 {
  "tiles": {
   "hard": "tiles/130_hard.png",
   "medium": "tiles/130_medium.png",
   "easy": "tiles/130_easy.png"
  },
  "answer": "seoul",
  "model": "seoul",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/131_hard.png",
   "medium": "tiles/131_medium.png",
   "easy": "tiles/131_easy.png"
  },
  "answer": "seoul",
  "model": "seoul",
  "confidence": 0.544
 },
 {
  "tiles": {
   "hard": "tiles/132_hard.png",
   "medium": "tiles/132_medium.png",
   "easy": "tiles/132_easy.png"
  },
  "answer": "seoul",
  "model": "seoul",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/133_hard.png",
   "medium": "tiles/133_medium.png",
   "easy": "tiles/133_easy.png"
  },
  "answer": "seoul",
  "model": "istanbul",
  "confidence": 0.711
 },
 {
  "tiles": {
   "hard": "tiles/134_hard.png",
   "medium": "tiles/134_medium.png",
   "easy": "tiles/134_easy.png"
  },
  "answer": "seoul",
  "model": "seoul",
  "confidence": 0.343
 },
 {
  "tiles": {
   "hard": "tiles/135_hard.png",
   "medium": "tiles/135_medium.png",
   "easy": "tiles/135_easy.png"
  },
  "answer": "seoul",
  "model": "seoul",
  "confidence": 0.891
 },
 {
  "tiles": {
   "hard": "tiles/136_hard.png",
   "medium": "tiles/136_medium.png",
   "easy": "tiles/136_easy.png"
  },
  "answer": "seoul",
  "model": "tokyo",
  "confidence": 0.961
 },
 {
  "tiles": {
   "hard": "tiles/137_hard.png",
   "medium": "tiles/137_medium.png",
   "easy": "tiles/137_easy.png"
  },
  "answer": "seoul",
  "model": "seoul",
  "confidence": 0.938
 },
 {
  "tiles": {
   "hard": "tiles/138_hard.png",
   "medium": "tiles/138_medium.png",
   "easy": "tiles/138_easy.png"
  },
  "answer": "seoul",
  "model": "tokyo",
  "confidence": 0.72
 },
 {
  "tiles": {
   "hard": "tiles/139_hard.png",
   "medium": "tiles/139_medium.png",
   "easy": "tiles/139_easy.png"
  },
  "answer": "seoul",
  "model": "seoul",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/140_hard.png",
   "medium": "tiles/140_medium.png",
   "easy": "tiles/140_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.996
 },
 {
  "tiles": {
   "hard": "tiles/141_hard.png",
   "medium": "tiles/141_medium.png",
   "easy": "tiles/141_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.794
 },
 {
  "tiles": {
   "hard": "tiles/142_hard.png",
   "medium": "tiles/142_medium.png",
   "easy": "tiles/142_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.678
 },
 {
  "tiles": {
   "hard": "tiles/143_hard.png",
   "medium": "tiles/143_medium.png",
   "easy": "tiles/143_easy.png"
  },
  "answer": "singapore",
  "model": "vancouver",
  "confidence": 0.199
 },
 {
  "tiles": {
   "hard": "tiles/144_hard.png",
   "medium": "tiles/144_medium.png",
   "easy": "tiles/144_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.978
 },
 {
  "tiles": {
   "hard": "tiles/145_hard.png",
   "medium": "tiles/145_medium.png",
   "easy": "tiles/145_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.971
 },
 {
  "tiles": {
   "hard": "tiles/146_hard.png",
   "medium": "tiles/146_medium.png",
   "easy": "tiles/146_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/147_hard.png",
   "medium": "tiles/147_medium.png",
   "easy": "tiles/147_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.879
 },
 {
  "tiles": {
   "hard": "tiles/148_hard.png",
   "medium": "tiles/148_medium.png",
   "easy": "tiles/148_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/149_hard.png",
   "medium": "tiles/149_medium.png",
   "easy": "tiles/149_easy.png"
  },
  "answer": "singapore",
  "model": "singapore",
  "confidence": 0.983
 },
 {
  "tiles": {
   "hard": "tiles/150_hard.png",
   "medium": "tiles/150_medium.png",
   "easy": "tiles/150_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 0.914
 },
 {
  "tiles": {
   "hard": "tiles/151_hard.png",
   "medium": "tiles/151_medium.png",
   "easy": "tiles/151_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 0.963
 },
 {
  "tiles": {
   "hard": "tiles/152_hard.png",
   "medium": "tiles/152_medium.png",
   "easy": "tiles/152_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 0.421
 },
 {
  "tiles": {
   "hard": "tiles/153_hard.png",
   "medium": "tiles/153_medium.png",
   "easy": "tiles/153_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/154_hard.png",
   "medium": "tiles/154_medium.png",
   "easy": "tiles/154_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 0.878
 },
 {
  "tiles": {
   "hard": "tiles/155_hard.png",
   "medium": "tiles/155_medium.png",
   "easy": "tiles/155_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/156_hard.png",
   "medium": "tiles/156_medium.png",
   "easy": "tiles/156_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/157_hard.png",
   "medium": "tiles/157_medium.png",
   "easy": "tiles/157_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 0.988
 },
 {
  "tiles": {
   "hard": "tiles/158_hard.png",
   "medium": "tiles/158_medium.png",
   "easy": "tiles/158_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 0.541
 },
 {
  "tiles": {
   "hard": "tiles/159_hard.png",
   "medium": "tiles/159_medium.png",
   "easy": "tiles/159_easy.png"
  },
  "answer": "stockholm",
  "model": "stockholm",
  "confidence": 0.557
 },
 {
  "tiles": {
   "hard": "tiles/160_hard.png",
   "medium": "tiles/160_medium.png",
   "easy": "tiles/160_easy.png"
  },
  "answer": "sydney",
  "model": "sydney",
  "confidence": 0.421
 },
 {
  "tiles": {
   "hard": "tiles/161_hard.png",
   "medium": "tiles/161_medium.png",
   "easy": "tiles/161_easy.png"
  },
  "answer": "sydney",
  "model": "new_york",
  "confidence": 0.997
 },
 {
  "tiles": {
   "hard": "tiles/162_hard.png",
   "medium": "tiles/162_medium.png",
   "easy": "tiles/162_easy.png"
  },
  "answer": "sydney",
  "model": "london",
  "confidence": 0.64
 },
 {
  "tiles": {
   "hard": "tiles/163_hard.png",
   "medium": "tiles/163_medium.png",
   "easy": "tiles/163_easy.png"
  },
  "answer": "sydney",
  "model": "sydney",
  "confidence": 0.913
 },
 {
  "tiles": {
   "hard": "tiles/164_hard.png",
   "medium": "tiles/164_medium.png",
   "easy": "tiles/164_easy.png"
  },
  "answer": "sydney",
  "model": "sydney",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/165_hard.png",
   "medium": "tiles/165_medium.png",
   "easy": "tiles/165_easy.png"
  },
  "answer": "sydney",
  "model": "tokyo",
  "confidence": 0.523
 },
 {
  "tiles": {
   "hard": "tiles/166_hard.png",
   "medium": "tiles/166_medium.png",
   "easy": "tiles/166_easy.png"
  },
  "answer": "sydney",
  "model": "sydney",
  "confidence": 0.919
 },
 {
  "tiles": {
   "hard": "tiles/167_hard.png",
   "medium": "tiles/167_medium.png",
   "easy": "tiles/167_easy.png"
  },
  "answer": "sydney",
  "model": "sydney",
  "confidence": 0.996
 },
 {
  "tiles": {
   "hard": "tiles/168_hard.png",
   "medium": "tiles/168_medium.png",
   "easy": "tiles/168_easy.png"
  },
  "answer": "sydney",
  "model": "san_francisco",
  "confidence": 0.527
 },
 {
  "tiles": {
   "hard": "tiles/169_hard.png",
   "medium": "tiles/169_medium.png",
   "easy": "tiles/169_easy.png"
  },
  "answer": "sydney",
  "model": "tokyo",
  "confidence": 0.437
 },
 {
  "tiles": {
   "hard": "tiles/170_hard.png",
   "medium": "tiles/170_medium.png",
   "easy": "tiles/170_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 0.977
 },
 {
  "tiles": {
   "hard": "tiles/171_hard.png",
   "medium": "tiles/171_medium.png",
   "easy": "tiles/171_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/172_hard.png",
   "medium": "tiles/172_medium.png",
   "easy": "tiles/172_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/173_hard.png",
   "medium": "tiles/173_medium.png",
   "easy": "tiles/173_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/174_hard.png",
   "medium": "tiles/174_medium.png",
   "easy": "tiles/174_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 0.849
 },
 {
  "tiles": {
   "hard": "tiles/175_hard.png",
   "medium": "tiles/175_medium.png",
   "easy": "tiles/175_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/176_hard.png",
   "medium": "tiles/176_medium.png",
   "easy": "tiles/176_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/177_hard.png",
   "medium": "tiles/177_medium.png",
   "easy": "tiles/177_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/178_hard.png",
   "medium": "tiles/178_medium.png",
   "easy": "tiles/178_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/179_hard.png",
   "medium": "tiles/179_medium.png",
   "easy": "tiles/179_easy.png"
  },
  "answer": "tokyo",
  "model": "tokyo",
  "confidence": 0.995
 },
 {
  "tiles": {
   "hard": "tiles/180_hard.png",
   "medium": "tiles/180_medium.png",
   "easy": "tiles/180_easy.png"
  },
  "answer": "vancouver",
  "model": "vancouver",
  "confidence": 0.55
 },
 {
  "tiles": {
   "hard": "tiles/181_hard.png",
   "medium": "tiles/181_medium.png",
   "easy": "tiles/181_easy.png"
  },
  "answer": "vancouver",
  "model": "vancouver",
  "confidence": 0.993
 },
 {
  "tiles": {
   "hard": "tiles/182_hard.png",
   "medium": "tiles/182_medium.png",
   "easy": "tiles/182_easy.png"
  },
  "answer": "vancouver",
  "model": "vancouver",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/183_hard.png",
   "medium": "tiles/183_medium.png",
   "easy": "tiles/183_easy.png"
  },
  "answer": "vancouver",
  "model": "vancouver",
  "confidence": 0.959
 },
 {
  "tiles": {
   "hard": "tiles/184_hard.png",
   "medium": "tiles/184_medium.png",
   "easy": "tiles/184_easy.png"
  },
  "answer": "vancouver",
  "model": "vancouver",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/185_hard.png",
   "medium": "tiles/185_medium.png",
   "easy": "tiles/185_easy.png"
  },
  "answer": "vancouver",
  "model": "singapore",
  "confidence": 0.723
 },
 {
  "tiles": {
   "hard": "tiles/186_hard.png",
   "medium": "tiles/186_medium.png",
   "easy": "tiles/186_easy.png"
  },
  "answer": "vancouver",
  "model": "istanbul",
  "confidence": 0.437
 },
 {
  "tiles": {
   "hard": "tiles/187_hard.png",
   "medium": "tiles/187_medium.png",
   "easy": "tiles/187_easy.png"
  },
  "answer": "vancouver",
  "model": "vancouver",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/188_hard.png",
   "medium": "tiles/188_medium.png",
   "easy": "tiles/188_easy.png"
  },
  "answer": "vancouver",
  "model": "vancouver",
  "confidence": 0.912
 },
 {
  "tiles": {
   "hard": "tiles/189_hard.png",
   "medium": "tiles/189_medium.png",
   "easy": "tiles/189_easy.png"
  },
  "answer": "vancouver",
  "model": "vancouver",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/190_hard.png",
   "medium": "tiles/190_medium.png",
   "easy": "tiles/190_easy.png"
  },
  "answer": "vienna",
  "model": "vienna",
  "confidence": 0.996
 },
 {
  "tiles": {
   "hard": "tiles/191_hard.png",
   "medium": "tiles/191_medium.png",
   "easy": "tiles/191_easy.png"
  },
  "answer": "vienna",
  "model": "moscow",
  "confidence": 0.61
 },
 {
  "tiles": {
   "hard": "tiles/192_hard.png",
   "medium": "tiles/192_medium.png",
   "easy": "tiles/192_easy.png"
  },
  "answer": "vienna",
  "model": "vienna",
  "confidence": 0.999
 },
 {
  "tiles": {
   "hard": "tiles/193_hard.png",
   "medium": "tiles/193_medium.png",
   "easy": "tiles/193_easy.png"
  },
  "answer": "vienna",
  "model": "stockholm",
  "confidence": 0.272
 },
 {
  "tiles": {
   "hard": "tiles/194_hard.png",
   "medium": "tiles/194_medium.png",
   "easy": "tiles/194_easy.png"
  },
  "answer": "vienna",
  "model": "vienna",
  "confidence": 0.969
 },
 {
  "tiles": {
   "hard": "tiles/195_hard.png",
   "medium": "tiles/195_medium.png",
   "easy": "tiles/195_easy.png"
  },
  "answer": "vienna",
  "model": "vienna",
  "confidence": 0.982
 },
 {
  "tiles": {
   "hard": "tiles/196_hard.png",
   "medium": "tiles/196_medium.png",
   "easy": "tiles/196_easy.png"
  },
  "answer": "vienna",
  "model": "vienna",
  "confidence": 0.935
 },
 {
  "tiles": {
   "hard": "tiles/197_hard.png",
   "medium": "tiles/197_medium.png",
   "easy": "tiles/197_easy.png"
  },
  "answer": "vienna",
  "model": "vienna",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/198_hard.png",
   "medium": "tiles/198_medium.png",
   "easy": "tiles/198_easy.png"
  },
  "answer": "vienna",
  "model": "vienna",
  "confidence": 1.0
 },
 {
  "tiles": {
   "hard": "tiles/199_hard.png",
   "medium": "tiles/199_medium.png",
   "easy": "tiles/199_easy.png"
  },
  "answer": "vienna",
  "model": "vienna",
  "confidence": 0.959
 }
];
