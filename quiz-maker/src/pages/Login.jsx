import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Login Successful! ✅");
      setEmail("");
      setPassword("");
      window.location.href = "/dashboard"; // Redirect to Dashboard
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Your Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleLogin}>Login</button>

        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
