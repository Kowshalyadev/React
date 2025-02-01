import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Movieicon from "./reellogo.png";
import Sampes from "./sample";
import Displaycardss from "./homepage";
import MovieDetails from "./samplenextpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup1 from "../../moviefinder/signup/signup";
import Login from "../../moviefinder/login/login";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after signing out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const hiddenRoutes = ["/", "/login"]; // Routes where the navbar should be hidden

  if (hiddenRoutes.includes(location.pathname)) {
    return null; // Return null to not render the navbar
  }

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={Movieicon}
            alt="icon"
            height="40"
            width="40"
            className="rounded me-2"
          />
          <div style={{ fontSize: "1.5rem", color: "white" }}>
            Movie World
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "white" }}
        >
          <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-link"
                style={{
                  color: "white",
                  padding: "10px 15px",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/movies"
                className="nav-link"
                style={{
                  color: "white",
                  padding: "10px 15px",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={handleSignOut} className="nav-link btn btn-link" style={{ color: "white", padding: "10px 15px", fontSize: "1rem", fontWeight: "500", border: "none", background: "none" }}>
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function AllRouterss() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Displaycardss />} />
        <Route path="/movies" element={<Sampes />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRouterss;