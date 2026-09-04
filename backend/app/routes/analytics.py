from fastapi import APIRouter
from app.services.analytics_service import get_dashboard_analytics

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get("/dashboard")
def dashboard():
    return {
        "success": True,
        "data": get_dashboard_analytics()
    }