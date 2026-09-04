import json

ANALYTICS_FILE = "app/database/analytics.json"

with open(ANALYTICS_FILE, "r", encoding="utf-8") as file:
    ANALYTICS = json.load(file)


def get_dashboard_analytics():
    return ANALYTICS