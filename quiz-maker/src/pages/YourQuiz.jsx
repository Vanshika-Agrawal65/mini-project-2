import React from "react";
import { useLocation, Link } from "react-router-dom";

const YourQuiz = () => {
  const location = useLocation();
  const quizData = location.state?.quizData || [];

  return (
    <div>
      <h2>Your Quizzes</h2>
      {quizData.length === 0 ? (
        <p>No quizzes created yet.</p>
      ) : (
        <div className="quiz-list">
          {quizData.map((quiz, index) => (
            <Link key={index} to={`/quiz/${index}`} className="quiz-link">
              <div className="quiz-item">
                <h3>Quiz {index + 1}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourQuiz;
