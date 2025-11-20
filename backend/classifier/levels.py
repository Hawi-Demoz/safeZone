LEVELS = ["LOW", "MEDIUM", "HIGH", "CRITICAL"]

# Score thresholds (inclusive lower bounds)
THRESHOLDS = {
    "LOW": 0,       # 0-4
    "MEDIUM": 5,    # 5-9
    "HIGH": 10,     # 10-14
    "CRITICAL": 15  # 15+
}

def map_score_to_level(score: int) -> str:
    if score >= THRESHOLDS["CRITICAL"]:
        return "CRITICAL"
    if score >= THRESHOLDS["HIGH"]:
        return "HIGH"
    if score >= THRESHOLDS["MEDIUM"]:
        return "MEDIUM"
    return "LOW"
