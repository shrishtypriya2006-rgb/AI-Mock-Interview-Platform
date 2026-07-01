from fastapi import FastAPI
from backend.routes import router

app = FastAPI(
    title="AI Mock Interview Platform",
    description="Backend API for AI-powered mock interviews",
    version="1.0.0"
)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "Welcome to AI Mock Interview Platform 🚀"
    }