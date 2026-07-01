from fastapi import APIRouter

router = APIRouter()

@router.get("/question")
def get_question():
    return {
        "question": "Tell me about yourself."
    }