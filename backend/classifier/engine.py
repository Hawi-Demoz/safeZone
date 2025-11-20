from .rules import score_text
from .levels import map_score_to_level
from .advice import get_advice


def classify(text: str):
    scoring = score_text(text)
    level = map_score_to_level(scoring["total"])
    advice, suggested = get_advice(level)
    return {
        "danger_level": level,
        "score": scoring["total"],
        "advice": advice,
        "suggested_actions": suggested,
        "breakdown": scoring["breakdown"],
        "hits": scoring["hits"],
    }
