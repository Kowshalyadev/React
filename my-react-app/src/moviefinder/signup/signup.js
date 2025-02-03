// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "../../fbconfig";
// import "./signup.css"; // Importing external CSS file for styling
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons

// function Signup1() {
//   const signUpDoneWithFb = getAuth(app);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [pswd, setPswd] = useState("");
//   const [confirmPswd, setConfirmPswd] = useState("");
//   const [error, setError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

//   const validatePassword = (password) => {
//     const passwordPattern =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordPattern.test(password);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !pswd || !confirmPswd) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     if (!validatePassword(pswd)) {
//       setError(
//         "Password must be at least 8 characters, include an uppercase, lowercase, number, and special character."
//       );
//       return;
//     }

//     if (pswd !== confirmPswd) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(signUpDoneWithFb, email, pswd);
//       navigate("/login");
//       setEmail("");
//       setPswd("");
//       setConfirmPswd("");
//     } catch (err) {
//       console.log(err);
//       if (err.code === "auth/email-already-in-use") {
//         setError("Email already exists. Click here to login.");
//       } else {
//         setError(err.message);
//       }
//     }
//   };

//   const handleGuestMode = () => {
//     navigate("/dashboard"); // Redirect to the guest dashboard
//   };

//   return (
//     <div className="signup-container">
//       <h1 className="signup-title">Signup</h1>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         {error && (
//           <p className="error-message">
//             {error.includes("Click here") ? (
//               <>
//                 Email already exists.{" "}
//                 <span
//                   className="login-link"
//                   onClick={() => navigate("/login")}
//                   style={{
//                     cursor: "pointer",
//                     color: "blue",
//                     textDecoration: "underline",
//                   }}
//                 >
//                   Click here to login.
//                 </span>
//               </>
//             ) : (
//               error
//             )}
//           </p>
//         )}

//         <input
//           type="email"
//           placeholder="Enter email here"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           className="signup-input"
//           required
//         />

//         <div className="password-container">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter password here"
//             onChange={(e) => {
//               setPswd(e.target.value);
//               setPasswordError(
//                 validatePassword(e.target.value)
//                   ? ""
//                   : "Password must have 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character."
//               );
//             }}
//             value={pswd}
//             className="signup-input"
//             required
//           />
//           <span
//             className="password-toggle"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>
//         {passwordError && <p className="error-message">{passwordError}</p>}

//         <div className="password-container">
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             placeholder="Confirm password"
//             onChange={(e) => setConfirmPswd(e.target.value)}
//             value={confirmPswd}
//             className="signup-input"
//             required
//           />
//           <span
//             className="password-toggle"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//           >
//             {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>

//         <button
//           type="submit"
//           className="signup-button"
//           disabled={!email || !pswd || !confirmPswd || passwordError}
//         >
//           Signup
//         </button>
//       </form>

//       <button
//         className="guest-button"
//         onClick={handleGuestMode}
//         style={{
//           marginTop: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#f0f0f0",
//           border: "1px solid #ccc",
//           cursor: "pointer",
//         }}
//       >
//         Continue as Guest
//       </button>
//     </div>
//   );
// }

// export default Signup1;

// import React, { useState, useEffect, useRef } from "react";
// import { app } from "../../fbconfig";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import "./signup.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function Signup1() {
//   const auth = getAuth(app);
//   const navigate = useNavigate();
//   const emailRef = useRef(null);

//   // State variables
//   const [isSignup, setIsSignup] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setError(""); // Clear errors when switching between signup/login
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//     emailRef.current?.focus(); // Auto-focus on email input
//   }, [isSignup]);

//   // Password validation function
//   const validatePassword = (password) => {
//     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return pattern.test(password);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!email || !password || (isSignup && !confirmPassword)) {
//       setError("Please fill in all fields.");
//       setLoading(false);
//       return;
//     }

//     if (isSignup && password !== confirmPassword) {
//       setError("Passwords do not match.");
//       setLoading(false);
//       return;
//     }

//     if (isSignup && !validatePassword(password)) {
//       setError("Password must have 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
//       setLoading(false);
//       return;
//     }

//     try {
//       if (isSignup) {
//         // Create user and switch to login form
//         await createUserWithEmailAndPassword(auth, email, password);
//         setIsSignup(false); // Switch to Login form
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//       } else {
//         // Login user and navigate to dashboard
//         await signInWithEmailAndPassword(auth, email, password);
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Guest login function
//   const handleGuestLogin = () => {
//     navigate("/dashboard");
//   };

//   return (
//     <div className="auth-container">
//       <h1>{isSignup ? "Signup" : "Login"}</h1>
//       <form onSubmit={handleSubmit} className="auth-form">
//         {error && <p className="error-message">{error}</p>}

//         <input
//           ref={emailRef}
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <div className="password-container">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <span onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>

//         {isSignup && (
//           <div className="password-container">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
//               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//         )}

//         <button type="submit" className="auth-button" disabled={loading}>
//           {loading ? "Processing..." : isSignup ? "Signup" : "Login"}
//         </button>
//       </form>

//       {/* Guest Login Button */}
//       <button onClick={handleGuestLogin} className="guest-button">Guest Login</button>

//       {/* Toggle between Signup and Login */}
//       <p onClick={() => setIsSignup(!isSignup)} className="toggle-auth">
//         {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
//       </p>
//     </div>
//   );
// }

// export default Signup1;

import React, { useState, useEffect, useRef } from "react";
import { app } from "../../fbconfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup1() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const emailRef = useRef(null);

  // State variables
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setError(""); 
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    emailRef.current?.focus(); 
  }, [isSignup]);

  const validatePassword = (password) => {
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);

    
    if (!email || !password || (isSignup && !confirmPassword)) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    
    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }


    if (isSignup && !validatePassword(password)) {
      setError(
        "Password must have 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character."
      );
      setLoading(false);
      return;
    }

    try {
      if (isSignup) {
      
        await createUserWithEmailAndPassword(auth, email, password);
        setIsSignup(false); // Switch to Login form
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        // Login flow
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err); 

      
      if (err.code === "auth/invalid-credential") {
        setError("Invalid credentials provided/password incorrect.");
      } else if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/email-already-in-use") {
        setError(
          "This email is already registered. Please log in or use a different email."
        );
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = () => {
    navigate("/dashboard");
  };

 
  const handleToggle = () => {
    setRotate(!rotate);
    setIsSignup(!isSignup); // Switch between signup and login
  };

  return (
    <div className="auth-container">
      <div className={`auth-form ${rotate ? "rotate" : ""}`}>
        <h1 style={{ fontSize: "2rem", fontFamily: "Roboto" }}>
          {isSignup ? "Signup" : "Login"}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="auth-form"
          style={{ fontSize: "1rem", fontFamily: "Roboto" }}
        >
          {error && <p className="error-message">{error}</p>}

          <input
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auths-input" 
            required
          />

          <div className="password-container" style={{ fontSize: "1rem", fontFamily: "Roboto" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input" 
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {isSignup && (
            <div className="password-container" style={{ fontSize: "1rem", fontFamily: "Roboto" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="auth-input" // Add the same class for consistent styling
                id="conformPsword"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Processing..." : isSignup ? "Signup" : "Login"}
          </button>
        </form>

       
        <button
          onClick={handleGuestLogin}
          className="guest-button"
          style={{ fontSize: "1rem", fontFamily: "Roboto" }}
        >
          Guest Login
        </button>

        
        <p
          onClick={handleToggle}
          className="toggle-auth"
          style={{ fontSize: "1rem", fontFamily: "Roboto" }}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Signup"}
        </p>
      </div>
    </div>
  );
}

export default Signup1;
