from fastapi import APIRouter, Depends

from app.models.order import CreateOrderRequest
from app.services.order_service import create_order, get_orders
from app.dependencies.auth import get_current_user

# Create router (THIS WAS MISSING)
router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)

# Create Order
@router.post("/create")
def create_new_order(
    request: CreateOrderRequest,
    user=Depends(get_current_user)
):
    order = create_order(
        request.payment_id,
        request.amount,
        [item.model_dump() for item in request.items]
    )

    return {
        "success": True,
        "order": order
    }

# Get Orders
@router.get("/")
def fetch_orders(user=Depends(get_current_user)):
    return {
        "success": True,
        "orders": get_orders()
    }