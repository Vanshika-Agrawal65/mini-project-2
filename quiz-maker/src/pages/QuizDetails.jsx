import React from "react";
import { useLocation } from "react-router-dom";
//import "./QuizDetails.css";

const QuizDetails = () => {
  const location = useLocation();
  const { quizTitle, quizData } = location.state || { quizTitle: "Quiz", quizData: [] };

  return (
    <div className="quiz-details">
      <h2>{quizTitle}</h2>
      {quizData.map((q, index) => (
        <div key={index} className="question-card">
          <p>
            <strong>Q{index + 1}:</strong> {q.question}
          </p>
          <ul>
            {q.options.map((opt, i) => (
              <li key={i} className={opt === q.correctAnswer ? "correct-option" : ""}>
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizDetails;
