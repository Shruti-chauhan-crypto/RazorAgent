from fastapi import APIRouter, HTTPException

from app.models.payment import (
    PaymentRequest,
    VerifyPaymentRequest,
)

from app.services.razorpay_service import (
    create_order,
    verify_signature,
)

from app.config import settings

router = APIRouter(
    prefix="/payment",
    tags=["Payments"],
)


@router.post("/create-order")
def create_payment_order(request: PaymentRequest):
    try:
        order = create_order(request.amount)

        return {
            "success": True,
            "order": order,
            "key": settings.RAZORPAY_KEY_ID,
        }

    except Exception as e:
        print("RAZORPAY CREATE ORDER ERROR:", repr(e))
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/verify")
def verify_payment(request: VerifyPaymentRequest):
    valid = verify_signature(
        request.razorpay_order_id,
        request.razorpay_payment_id,
        request.razorpay_signature,
    )

    if valid:
        return {
            "success": True,
            "message": "Payment verified successfully.",
        }

    raise HTTPException(
        status_code=400,
        detail="Payment verification failed.",
    )