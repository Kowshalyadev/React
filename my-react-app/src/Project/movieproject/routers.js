import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movieicon from "./moviecamera.jpg";
import Sampes from "./sample";
import Displaycardss from "./duplicatedata";
import MovieDetails from "./samplenextpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Routers() {
  const [zoomLetter, setZoomLetter] = useState(null); // Track the letter to zoom
  const [index, setIndex] = useState(0); // Track the index for auto zoom

  // UseEffect to trigger zoom effect for each letter automatically
  useEffect(() => {
    if (index < "MovieZone".length) {
      const interval = setInterval(() => {
        setZoomLetter("MovieZone"[index]); // Zoom each letter in sequence
        setIndex((prevIndex) => prevIndex + 1);
      }, 300); // Change the delay for the effect (e.g., 300ms per letter)

      return () => clearInterval(interval); // Cleanup the interval
    } else {
      // Reset zoomLetter and index after all letters have been zoomed
      const timeout = setTimeout(() => {
        setZoomLetter(null);
        setIndex(0);
      }, 300);

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [index]);

  return (
    <>
      <BrowserRouter>
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <div className="container-fluid">
            {/* Logo with Movie Icon */}
            <Link to="/home" className="navbar-brand d-flex align-items-center">
              <img
                src={Movieicon}
                alt="icon"
                height="40"
                width="40"
                className="rounded me-2"
              />
              {/* MovieZone with Auto Zoom Effect */}
              <div style={{ display: "flex", fontSize: "1.5rem" }}>
                {"MovieZone".split("").map((letter, i) => (
                  <span
                    key={i}
                    style={{
                      margin: "0 2px",
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      transform: zoomLetter === letter ? "scale(2)" : "scale(1)",
                      color: zoomLetter === letter ? "red" : "white",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </Link>

            {/* Toggler Button for Collapsible Menu */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/movies" className="nav-link">
                    Movies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Displaycardss />} />
          <Route path="/movies" element={<Sampes />} />
          <Route path="/movies/:_id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
