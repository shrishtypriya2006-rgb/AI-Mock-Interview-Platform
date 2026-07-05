from fastapi import APIRouter
from pydantic import BaseModel
from services import generate_question, evaluate_answer

router = APIRouter()


class AnswerRequest(BaseModel):
    question: str
    answer: str


@router.get("/question")
def get_question(role: str = "Python Developer"):
    question = generate_question(role)

    return {
        "role": role,
        "question": question
    }


@router.post("/evaluate")
def evaluate(request: AnswerRequest):
    feedback = evaluate_answer(
        request.question,
        request.answer
    )

    return {
        "feedback": feedback
    }