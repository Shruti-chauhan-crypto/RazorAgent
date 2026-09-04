from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.routes.health import router as health_router
from app.routes.ai import router as ai_router
from app.routes.analytics import router as analytics_router
from app.routes.payment import router as payment_router
from app.routes.orders import router as orders_router
from app.routes.auth import router as auth_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="AI Merchant Growth & Checkout Assistant Backend",
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routes
app.include_router(health_router)
app.include_router(ai_router)
app.include_router(analytics_router)
app.include_router(payment_router)
app.include_router(orders_router)
app.include_router(auth_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to RazorAgent API 🚀"
    }