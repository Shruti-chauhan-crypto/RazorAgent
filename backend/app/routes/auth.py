from fastapi import APIRouter, HTTPException

from app.models.user import SignupRequest, LoginRequest
from app.services.auth_service import register_user, authenticate_user
from app.services.jwt_service import create_access_token

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/signup")
def signup(request: SignupRequest):
    user = register_user(
        request.name,
        request.email,
        request.password,
    )

    if not user:
        raise HTTPException(400, "Email already exists.")

    token = create_access_token(
        {"email": user["email"], "name": user["name"]}
    )

    return {
        "success": True,
        "token": token,
        "user": {
            "name": user["name"],
            "email": user["email"],
        },
    }

@router.post("/login")
def login(request: LoginRequest):
    user = authenticate_user(
        request.email,
        request.password,
    )

    if not user:
        raise HTTPException(401, "Invalid credentials.")

    token = create_access_token(
        {"email": user["email"], "name": user["name"]}
    )

    return {
        "success": True,
        "token": token,
        "user": {
            "name": user["name"],
            "email": user["email"],
        },
    }