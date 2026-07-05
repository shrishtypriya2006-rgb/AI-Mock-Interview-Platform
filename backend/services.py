import google.generativeai as genai
from config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_question(role):
    prompt = f"""
    You are a technical interviewer.

    Ask one interview question for a {role}.

    Only return the question.
    """

    response = model.generate_content(prompt)

    return response.text


def evaluate_answer(question, answer):
    prompt = f"""
    You are an expert technical interviewer.

    Interview Question:
    {question}

    Candidate Answer:
    {answer}

    Evaluate the answer using the following format:

    Score: __/10

    Strengths:
    - ...

    Weaknesses:
    - ...

    Suggestions:
    - ...

    Keep the feedback clear and concise.
    """

    response = model.generate_content(prompt)

    return response.text