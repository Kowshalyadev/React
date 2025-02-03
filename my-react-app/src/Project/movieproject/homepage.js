import React from "react";
import Instagram from "./instagram.png";
import Facebook from "./facebook.png";
import Twitter from "./twitter.png";
import MovieVedio from "./mainVedio";
import "./homepage.css";

function Displaycards() {
  return (
    <div className="displaycards-container">
      {/* Main Video */}
      <MovieVedio />

      {/* Recent Telugu Movie Trailers */}
      <section className="trailers-section">
        <h2>Recent Telugu Movie Trailers</h2>
        <div className="trailers">
          <iframe
            title="Trailer 1"
            className="trailer-frame"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MFKdqXk6XIQ?si=c8eRpve40CCIHWKE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            title="Trailer 2"
            className="trailer-frame"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RlRpN1Fa9Wo?si=jqxQgXfHEB5qNM5j"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* Contact Details and Social Media */}
      <footer className="footer">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: contact@movieworld.com</p>
          <p>Phone: +91-9846378531</p>
          <p>Address: 123, Movie Street, Film City, India</p>
        </div>
        <div className="social-media">
          <h2 id="follow-us-text">Follow Us</h2>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </footer>

      {/* Thank You Message with Confetti */}
      <div className="thank-you-container">
        <h2 className="thank-you-message">Thank You for Visiting!</h2>
        <div className="confetti">
          <div className="confetti-piece" style={{ left: '10%' }}></div>
          <div className="confetti-piece" style={{ left: '20%' }}></div>
          <div className="confetti-piece" style={{ left: '30%' }}></div>
          <div className="confetti-piece" style={{ left: '40%' }}></div>
          <div className="confetti-piece" style={{ left: '50%' }}></div>
          <div className="confetti-piece" style={{ left: '60%' }}></div>
          <div className="confetti-piece" style={{ left: '70%' }}></div>
          <div className="confetti-piece" style={{ left: '80%' }}></div>
          <div className="confetti-piece" style={{ left: '90%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Displaycards;
