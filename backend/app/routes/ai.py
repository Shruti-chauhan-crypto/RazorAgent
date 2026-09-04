from fastapi import APIRouter, HTTPException

from app.models.chat import ChatRequest
from app.services.gemini_service import generate_ai_response

# Create router FIRST
router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"]
)

@router.post("/chat")
def chat(request: ChatRequest):
    try:
        data = generate_ai_response(request.message)

        return {
            "success": True,
            "reply": data["reply"],
            "products": data["products"],
            "bundle": data["bundle"]
        }

    except Exception as e:
        print("Gemini Error:", e)
        raise HTTPException(status_code=500, detail=str(e))