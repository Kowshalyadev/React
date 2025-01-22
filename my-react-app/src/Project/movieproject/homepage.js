import React from "react";
import MovieVedio from "./mainVedio";
import "./homepage.css"; // Importing the CSS file for styling

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
            width="400"
            height="225"
            src="https://www.youtube.com/embed/2OdZfRAwkv8" // Replace with actual trailer URL
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            title="Trailer 2"
            width="400"
            height="225"
            src="https://www.youtube.com/embed/XYaOuo2WnMc" // Replace with actual trailer URL
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Contact Details and Social Media */}
      <footer className="footer">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: contact@movieworld.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Address: 123, Movie Street, Film City, India</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook-logo.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter-logo.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram-logo.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Displaycards;
