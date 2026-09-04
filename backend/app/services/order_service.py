import json
import uuid
from datetime import datetime

ORDER_FILE = "app/database/orders.json"


def read_orders():
    try:
        with open(ORDER_FILE, "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        return []


def write_orders(data):
    with open(ORDER_FILE, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)


def create_order(payment_id, amount, items):
    orders = read_orders()

    new_order = {
        "order_id": f"RAZOR-{uuid.uuid4().hex[:8].upper()}",
        "payment_id": payment_id,
        "amount": amount,
        "status": "Paid",
        "created_at": datetime.now().strftime("%d %b %Y, %I:%M %p"),
        "items": items
    }

    orders.insert(0, new_order)
    write_orders(orders)

    return new_order


def get_orders():
    return read_orders()