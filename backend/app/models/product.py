from pydantic import BaseModel

class Product(BaseModel):
    id: int
    name: str
    category: str
    brand: str
    price: int
    rating: float
    discount: int
    gender: str
    color: str
    image: str