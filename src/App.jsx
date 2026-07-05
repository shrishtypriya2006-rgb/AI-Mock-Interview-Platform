import { useState } from "react";
import "./App.css";

function App() {
  const [role, setRole] = useState("Python Developer");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuestion = async () => {
    setLoading(true);
    setFeedback("");

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/question?role=${encodeURIComponent(role)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch question");
      }

      const data = await response.json();

      setQuestion(data.question);
      setAnswer("");
    } catch (err) {
      console.error(err);
      alert("Failed to fetch question");
    }

    setLoading(false);
  };

  const submitAnswer = async () => {
    if (!answer.trim()) {
      alert("Please write your answer first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          answer,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to evaluate answer");
      }

      const data = await response.json();

      setFeedback(data.feedback);
    } catch (err) {
      console.error(err);
      alert("Failed to evaluate answer");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🎤 AI Mock Interview Platform</h1>

      <h2>Welcome, Shrishty!</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      >
        <option>Python Developer</option>
        <option>AI Engineer</option>
        <option>Data Scientist</option>
        <option>Machine Learning Engineer</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
      </select>

      <br />
      <br />

      <button onClick={getQuestion} disabled={loading}>
        {loading ? "Loading..." : "Start Interview"}
      </button>

      {question && (
        <>
          <h2 style={{ marginTop: "40px" }}>Interview Question</h2>

          <p
            style={{
              width: "70%",
              margin: "auto",
              fontSize: "20px",
            }}
          >
            {question}
          </p>

          <h2 style={{ marginTop: "40px" }}>Your Answer</h2>

          <textarea
            rows="8"
            cols="70"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer here..."
          />

          <br />
          <br />

          <button onClick={submitAnswer} disabled={loading}>
            Submit Answer
          </button>
        </>
      )}

      {feedback && (
        <div
          style={{
            marginTop: "40px",
            width: "80%",
            margin: "40px auto",
            background: "#222",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            whiteSpace: "pre-wrap",
            textAlign: "left",
          }}
        >
          <h2>AI Feedback</h2>

          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}

export default App;