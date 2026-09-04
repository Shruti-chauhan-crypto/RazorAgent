import razorpay
from app.config import settings

client = razorpay.Client(
    auth=(
        settings.RAZORPAY_KEY_ID,
        settings.RAZORPAY_KEY_SECRET,
    )
)


def create_order(amount):
    """
    Amount should be in paisa.
    Example: ₹100 = 10000 paisa
    """

    order = client.order.create({
        "amount": amount,
        "currency": "INR",
        "payment_capture": 1
    })

    return order


def verify_signature(order_id, payment_id, signature):
    try:
        client.utility.verify_payment_signature({
            "razorpay_order_id": order_id,
            "razorpay_payment_id": payment_id,
            "razorpay_signature": signature,
        })
        return True

    except razorpay.errors.SignatureVerificationError:
        return False