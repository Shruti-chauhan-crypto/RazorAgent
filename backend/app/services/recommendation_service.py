import json
import re

PRODUCT_FILE = "app/database/products.json"

with open(PRODUCT_FILE, "r", encoding="utf-8") as file:
    PRODUCTS = json.load(file)


def recommend_products(query: str):
    query = query.lower()

    # Extract budget (e.g. 3000 from "under 3000")
    numbers = re.findall(r"\d+", query)
    budget = int(numbers[0]) if numbers else None

    recommendations = []

    for product in PRODUCTS:
        # Budget filter
        if budget and product["price"] > budget:
            continue

        score = 0

        # Category is mandatory if mentioned
        if "sneaker" in query or "shoe" in query:
            if product["category"] != "sneakers":
                continue
            score += 5

        elif "earbud" in query or "buds" in query:
            if product["category"] != "earbuds":
                continue
            score += 5

        elif "watch" in query:
            if product["category"] != "watch":
                continue
            score += 5

        # Brand preference
        if product["brand"].lower() in query:
            score += 3

        # Color preference
        if product["color"].lower() in query:
            score += 2

        # Gender preference
        if "women" in query and product["gender"] == "women":
            score += 2

        if "men" in query and product["gender"] == "men":
            score += 2

        if score > 0:
            recommendations.append((score, product))

    recommendations.sort(key=lambda x: (x[0], x[1]["rating"]), reverse=True)

    return [product for _, product in recommendations[:4]]