import json

BUNDLE_FILE = "app/database/bundles.json"

with open(BUNDLE_FILE, "r", encoding="utf-8") as file:
    BUNDLES = json.load(file)


def get_bundle_recommendations(products):
    """
    products = list of recommended products from recommendation engine.
    """

    if not products:
        return []

    category = products[0]["category"]

    for bundle in BUNDLES:
        if bundle["product_category"] == category:
            return bundle

    return {}

def generate_cart_summary(cart_items):
    """
    Generate AI cart summary and offers.
    """

    if not cart_items:
        return {
            "title": "Your cart is empty",
            "message": "Add products to see personalized offers."
        }

    total = sum(item["price"] for item in cart_items)

    if total < 3000:
        return {
            "title": "Free Shipping Offer 🚚",
            "message": f"Spend ₹{3000 - total} more to unlock FREE shipping."
        }

    return {
        "title": "Free Shipping Unlocked 🎉",
        "message": "Your cart qualifies for FREE shipping."
    }