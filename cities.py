# Every city is a circle of RADIUS_KM around a chosen centre (latitude, longitude).
RADIUS_KM = 7

CENTRES = {
    "amsterdam":     (52.3650, 4.8900),  
    "bangkok":       (13.7400, 100.5300), 
    "barcelona":     (41.3980, 2.1600),    
    "beijing":       (39.9100, 116.3970), 
    "berlin":        (52.5200, 13.4050),   
    "chicago":       (41.8800, -87.6700),  
    "istanbul":      (41.0400, 28.9600),  
    "london":        (51.5073, -0.1276),   
    "madrid":        (40.4200, -3.6900),   
    "moscow":        (55.7520, 37.6175),   
    "new_york":      (40.7300, -73.9700),  
    "paris":         (48.8566, 2.3522),    
    "san_francisco": (37.7650, -122.4350), 
    "seoul":         (37.5450, 127.0000),  
    "singapore":     (1.3150, 103.8600),  
    "stockholm":     (59.3400, 18.0500),   
    "sydney":        (-33.8950, 151.1900),  
    "tokyo":         (35.6950, 139.7350),   
    "vancouver":     (49.2550, -123.1000), 
    "vienna":        (48.2000, 16.3600),   
}

CITIES = {name: {"center": c, "radius_km": RADIUS_KM} for name, c in CENTRES.items()}