ADVICE = {
    "LOW": [
        "Stay aware of surroundings.",
        "Document concerning behaviors in a private note.",
        "Share general concerns with a trusted friend."],
    "MEDIUM": [
        "Limit sharing of personal location publicly.",
        "Arrange a check-in schedule with someone you trust.",
        "Identify nearby safe public places to go if needed."],
    "HIGH": [
        "Prepare to contact emergency services if escalation occurs.",
        "Avoid isolated areas; stay where others are present.",
        "Keep phone charged and accessible; enable emergency dialing shortcuts."],
    "CRITICAL": [
        "Call emergency services immediately if safe to do so.",
        "If unable to speak, stay on the line and follow dispatcher guidance.",
        "Leave the area to a safe public location if possible without confrontation."],
}

SUGGESTED_ACTIONS = {
    "LOW": ["Log situation details"],
    "MEDIUM": ["Share location with trusted contact", "Plan exit route"],
    "HIGH": ["Move to safer location", "Keep emergency numbers ready"],
    "CRITICAL": ["Dial emergency services", "Seek immediate shelter"]
}

def get_advice(level: str):
    return ADVICE.get(level, []), SUGGESTED_ACTIONS.get(level, [])
