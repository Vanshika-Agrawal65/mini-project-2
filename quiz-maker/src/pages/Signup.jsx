import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && firstName && password) {
      alert("Sign Up Successful! ✅");
      setEmail("");
      setFirstName("");
      setPassword("");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Please fill all fields before signing up.");
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Your Email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="First Name"
        className="input-field"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn-primary" onClick={handleSubmit}>Sign Up</button>

      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignUp;
