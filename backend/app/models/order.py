from pydantic import BaseModel
from typing import List

class OrderItem(BaseModel):
    id: int
    name: str
    price: int
    quantity: int
    image: str

class CreateOrderRequest(BaseModel):
    payment_id: str
    amount: int
    items: List[OrderItem]

class Order(BaseModel):
    order_id: str
    payment_id: str
    amount: int
    status: str
    created_at: str
    items: List[OrderItem]