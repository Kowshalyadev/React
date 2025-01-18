import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movieicon from "./moviecamera.jpg";
import Sampes from "./sample";
import Displaycardss from "./duplicatedata";
import MovieDetails from "./samplenextpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Routers() {
  const [zoomLetter, setZoomLetter] = useState(null); 
  const [index, setIndex] = useState(0); 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setZoomLetter("MovieZone"[index]); 
      setIndex((prevIndex) => {
        if (prevIndex < "MovieZone".length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval); 
          return prevIndex;
        }
      });
    }, 300); 

   
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <BrowserRouter>
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <div className="container-fluid">
         
            <Link to="/home" className="navbar-brand d-flex align-items-center">
              <img
                src={Movieicon}
                alt="icon"
                height="40"
                width="40"
                className="rounded me-2"
              />
             
              <div style={{ display: "flex", fontSize: "1.5rem" }}>
                {"MovieZone".split("").map((letter, index) => (
                  <span
                    key={index}
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

        
        <Routes>
          <Route path="/home" element={<Displaycardss />} />
          <Route path="/movies" element={<Sampes />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
