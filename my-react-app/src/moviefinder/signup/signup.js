import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../fbconfig";
import "./signup.css"; // Importing external CSS file for styling
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons

function Signup1() {
  const signUpDoneWithFb = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !pswd || !confirmPswd) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validatePassword(pswd)) {
      setError(
        "Password must be at least 8 characters, include an uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (pswd !== confirmPswd) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(signUpDoneWithFb, email, pswd);
      navigate("/login");
      setEmail("");
      setPswd("");
      setConfirmPswd("");
    } catch (err) {
      console.log(err);
      if (err.code === "auth/email-already-in-use") {
        setError("Email already exists. Click here to login.");
      } else {
        setError(err.message);
      }
    }
  };

  const handleGuestMode = () => {
    navigate("/dashboard"); // Redirect to the guest dashboard
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {error && (
          <p className="error-message">
            {error.includes("Click here") ? (
              <>
                Email already exists.{" "}
                <span
                  className="login-link"
                  onClick={() => navigate("/login")}
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  Click here to login.
                </span>
              </>
            ) : (
              error
            )}
          </p>
        )}

        <input
          type="email"
          placeholder="Enter email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="signup-input"
          required
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password here"
            onChange={(e) => {
              setPswd(e.target.value);
              setPasswordError(
                validatePassword(e.target.value)
                  ? ""
                  : "Password must have 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character."
              );
            }}
            value={pswd}
            className="signup-input"
            required
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}

        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPswd(e.target.value)}
            value={confirmPswd}
            className="signup-input"
            required
          />
          <span
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          type="submit"
          className="signup-button"
          disabled={!email || !pswd || !confirmPswd || passwordError}
        >
          Signup
        </button>
      </form>

      <button
        className="guest-button"
        onClick={handleGuestMode}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        Continue as Guest
      </button>
    </div>
  );
}

export default Signup1;
