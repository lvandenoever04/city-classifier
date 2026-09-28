CITIES = {
    # Cities with a useable official boundary
    "new_york": {"query": "New York City, New York, United States"},
    "chicago": {"query": "Chicago, Illinois, United States"},
    "barcelona": {"query": "Barcelona, Spain"},
    "buenos_aires": {"query": "Ciudad Autonoma de Buenos Aires, Argentina"},
    "london": {"query": "Greater London, United Kingdom"},
    "paris": {"query": "Paris, France"},
    "berlin": {"query": "Berlin, Germany"},
    "madrid": {"query": "Madrid, Comunidad de Madrid, Spain"},
    "rome": {"query": "Roma, Lazio, Italy"},
    "amsterdam": {"query": "Amsterdam, Netherlands"},
    "vienna": {"query": "Vienna, Austria"},
    "marrakech": {"query": "Marrakesh, Morocco"},
    "mumbai": {"query": "Mumbai, Maharashtra, India"},
    "mexico_city": {"query": "Ciudad de Mexico, Mexico"},

    # Cities without a useable official boundary (drawing a radius from a centre)
    "tokyo": {"center": (35.6812, 139.7671), "radius_km": 12},
    "beijing": {"center": (39.9055, 116.3976), "radius_km": 12},
    "istanbul": {"center": (41.0165, 28.9730), "radius_km": 12},
    "moscow": {"center": (55.7520, 37.6175), "radius_km": 12},
    "sydney": {"center": (-33.8731, 151.2065), "radius_km": 12},
    "cairo": {"center": (30.0444, 31.2357), "radius_km": 12},
}