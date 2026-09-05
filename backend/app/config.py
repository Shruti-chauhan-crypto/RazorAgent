from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # App Settings
    APP_NAME: str = "RazorAgent API"
    APP_VERSION: str = "1.0.0"

    # Gemini
    GEMINI_API_KEY: str

    # Razorpay
    RAZORPAY_KEY_ID: str
    RAZORPAY_KEY_SECRET: str

    # Frontend
    FRONTEND_URL: str = "http://localhost:5173"
    SECRET_KEY: str = "razoragent_super_secret_key_2026"

    # Pydantic Settings
    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"   # Ignore unknown variables in .env
    )


settings = Settings()