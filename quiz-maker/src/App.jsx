import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import QuizPage from "./pages/QuizPage";
import ScorePage from "./pages/ScorePage";
import CreateQuiz from "./pages/CreateQuiz";
import YourQuiz from "./pages/YourQuiz";
import QuizDetails from "./pages/QuizDetails"; // Importing QuizDetails

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz/:quizName" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/your-quiz" element={<YourQuiz />} />
        <Route path="/quiz/:id" element={<QuizDetails />} /> {/* Fixed QuizDetails Route */}
      </Routes>
    </Router>
  );
}

export default App;
