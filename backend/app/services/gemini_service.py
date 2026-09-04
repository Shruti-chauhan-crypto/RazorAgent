import google.generativeai as genai
from app.config import settings
from app.utils.prompt_templates import SHOPPING_ASSISTANT_PROMPT
from app.services.recommendation_service import recommend_products

genai.configure(api_key=settings.GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-3.6-flash")


def generate_ai_response(user_message: str):
    matched_products = recommend_products(user_message)

    if not matched_products:
        return {
            "reply": "I couldn't find matching products in our store. Try another category or budget.",
            "products": []
        }

    product_text = "\n".join(
        [f"{p['name']} (₹{p['price']})" for p in matched_products]
    )

    prompt = f"""
{SHOPPING_ASSISTANT_PROMPT}

Customer Query:
{user_message}

Available Products:
{product_text}

Give a short shopping recommendation.
"""

    try:
        response = model.generate_content(prompt)
        reply = response.text
    except Exception:
        # Fallback if Gemini quota is exceeded
        names = ", ".join([p["name"] for p in matched_products[:3]])
        reply = (
            f"I found {len(matched_products)} products from our catalog that match your request. "
            f"Top picks: {names}. Check the product cards below for details and add your favorite to the cart."
        )

    return {
        "reply": reply,
        "products": matched_products
    }