import React, { useState } from "react";
import { app } from "../../fbconfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./login.css"; // External CSS for styling

function Login() {
  const navigate = useNavigate(); // Correctly use `useNavigate` for navigation
  const loginWithFb = getAuth(app);
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !pswd) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const loginSuccess = await signInWithEmailAndPassword(loginWithFb, email, pswd);
      if (loginSuccess) {
        alert("Logged in successfully");
        navigate("/dashboard"); // Navigate to the `/dashboard` route
        setEmail("");
        setPswd("");
        setError("");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Enter email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Enter password here"
          onChange={(e) => setPswd(e.target.value)}
          value={pswd}
          className="login-input"
        />
        <button
          type="submit"
          className="login-button"
          disabled={!email || !pswd}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
