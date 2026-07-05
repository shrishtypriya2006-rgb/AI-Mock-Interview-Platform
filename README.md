# 🎤 AI Mock Interview Platform

An AI-powered Mock Interview Platform built with **React**, **FastAPI**, and **Google Gemini AI** that helps users prepare for technical interviews by generating role-specific interview questions and providing intelligent feedback on their answers.

---

## 🚀 Features

- 🎯 Role-based interview question generation
- 🤖 AI-powered answer evaluation using Google Gemini AI
- 📊 Detailed feedback with:
  - Score
  - Strengths
  - Weaknesses
  - Suggestions for improvement
- 💻 Clean and responsive React frontend
- ⚡ FastAPI backend
- 🔄 Real-time communication between frontend and backend
- 🌐 REST API architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS
- Material UI

### Backend
- Python
- FastAPI
- Uvicorn

### AI
- Google Gemini API

### Tools
- Git
- GitHub
- VS Code

---

## 📂 Project Structure

```
AI-Mock-Interview-Platform
│
├── backend
│   ├── main.py
│   ├── routes.py
│   ├── services.py
│   ├── config.py
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/shrishtypriya2006-rgb/AI-Mock-Interview-Platform.git
```

### Move into the Project

```bash
cd AI-Mock-Interview-Platform
```

---

## Backend Setup

Create a virtual environment

```bash
python -m venv venv
```

Activate the virtual environment

### Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file in the project root and add your Gemini API key:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run the backend server

```bash
cd backend
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run the frontend

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 📸 Screenshots

### Home Page

_Add a screenshot here._

### Interview Question

_Add a screenshot here._

### AI Feedback

_Add a screenshot here._

---

## 🎯 Future Enhancements

- 🔐 User Authentication
- 📜 Interview History
- 📄 Export Feedback as PDF
- 🎤 Voice-Based Interviews
- ⏱️ Interview Timer
- 🌙 Dark Mode
- 📊 Performance Dashboard
- 📈 Analytics and Progress Tracking

---

## 👩‍💻 Author

**Shrishty Priya**

GitHub:
https://github.com/shrishtypriya2006-rgb

LinkedIn:
(Add your LinkedIn profile here)

---

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the MIT License.
