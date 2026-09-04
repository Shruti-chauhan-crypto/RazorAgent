from fastapi import APIRouter

from app.models.order import CreateOrderRequest
from app.services.order_service import create_order, get_orders

router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)


@router.post("/create")
def create_new_order(request: CreateOrderRequest):
    order = create_order(
        request.payment_id,
        request.amount,
        [item.model_dump() for item in request.items]
    )

    return {
        "success": True,
        "order": order
    }


@router.get("/")
def fetch_orders():
    return {
        "success": True,
        "orders": get_orders()
    }