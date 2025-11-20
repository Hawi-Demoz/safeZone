"""Keyword lists grouped by category with simple weights.
These are intentionally small for MVP and beginner friendly.
"""

CONTROL_KEYWORDS = {
	# monitoring / isolation
	"controls": 2,
	"checks": 2,
	"monitor": 2,
	"track": 3,
	"isolate": 3,
	"forbid": 3,
	"password": 2,
	"phone": 1,
}

THREAT_KEYWORDS = {
	"threat": 4,
	"hurt": 4,
	"kill": 6,
	"destroy": 5,
	"weapon": 6,
	"gun": 6,
	"knife": 6,
	"burn": 5,
	"choke": 6,
}

STALKING_KEYWORDS = {
	"follow": 4,
	"stalk": 6,
	"watch": 3,
	"outside": 2,
	"waiting": 3,
	"appear": 2,
	"surveillance": 5,
}

VIOLENCE_KEYWORDS = {
	"hit": 6,
	"punch": 6,
	"slap": 5,
	"push": 4,
	"force": 5,
	"rape": 10,
	"sexual": 7,
	"assault": 8,
	"blood": 7,
	"broken": 6,
}

CATEGORIES = {
	"CONTROL": CONTROL_KEYWORDS,
	"THREAT": THREAT_KEYWORDS,
	"STALKING": STALKING_KEYWORDS,
	"VIOLENCE": VIOLENCE_KEYWORDS,
}

def score_text(text: str):
	text_lower = text.lower()
	total = 0
	breakdown = {cat: 0 for cat in CATEGORIES}
	hits = []
	for cat, words in CATEGORIES.items():
		for w, weight in words.items():
			if w in text_lower:
				total += weight
				breakdown[cat] += weight
				hits.append({"keyword": w, "weight": weight, "category": cat})
	return {"total": total, "breakdown": breakdown, "hits": hits}
