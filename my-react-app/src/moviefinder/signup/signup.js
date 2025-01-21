import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../fbconfig";
import "./signup.css"; // Importing external CSS file for styling

function Signup() {
  const signUpDoneWithFb = getAuth(app);
  const navigate = useNavigate();
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
      let a = await createUserWithEmailAndPassword(signUpDoneWithFb, email, pswd);
      alert("Signup successful");
      console.log(a);
      navigate("/login");
      setEmail("");
      setPswd("");
      setError("");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Enter email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Enter password here"
          onChange={(e) => setPswd(e.target.value)}
          value={pswd}
          className="signup-input"
        />
        <button
          type="submit"
          className="signup-button"
          disabled={!email || !pswd}
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
