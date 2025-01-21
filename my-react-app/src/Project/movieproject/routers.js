import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movieicon from "./images.png";
import Sampes from "./sample";
import Displaycardss from "./homepage";
import MovieDetails from "./samplenextpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AllRouterss() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar with a dignified design */}
        <nav
          className="navbar navbar-expand-lg sticky-top"
          style={{
            background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // Gradient background
            color: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Shadow for depth
          }}
        >
          <div className="container-fluid">
            {/* Logo and Brand */}
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                src={Movieicon}
                alt="icon"
                height="40"
                width="40"
                className="rounded me-2"
              />
              <div style={{ fontSize: "1.5rem", fontWeight: "bold",color:"wheat"}}>MovieZone</div>
            </Link>

            {/* Navbar Toggler for Mobile */}
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

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/"
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
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Displaycardss />} />
          <Route path="/movies" element={<Sampes />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AllRouterss;
