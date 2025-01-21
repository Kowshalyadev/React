import React, { useEffect, useState } from "react";
import MaincardSS from "./moviecards.js";
import "bootstrap/dist/css/bootstrap.min.css";
import soundEffect from "./button-202966.mp3";
import { Link } from "react-router-dom";
import "./sample.css"; // Import custom CSS for styles
import { Spinner } from "react-bootstrap"; // Import Bootstrap Spinner

function MovieCards() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomedCard, setZoomedCard] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://677e5b8794bde1c1252b9a59.mockapi.io/movie/api/movies"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const uniqueMovies = Array.from(new Set(data.map((movie) => movie.id)))
          .map((id) => data.find((movie) => movie.id === id));
        setMovies(uniqueMovies);
        setFilteredMovies(uniqueMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.movie_name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchInput, movies]);

  const playSound = () => {
    const audio = new Audio(soundEffect);
    audio.play();
  };

  const handleCardClick = (id) => {
    playSound();
    setZoomedCard(id === zoomedCard ? null : id); // Toggle zoom
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status" className="spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        {/* <p>Loading movies...</p> */}
      </div>
    );
  }

  if (error) {
    return <p className="error-text">Error: {error}</p>;
  }

  return (
    <div className="movie-cards-container">
      <h1 className="title">Movie Finder</h1>
      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          placeholder="Search for a movie..."
          className="search-input"
        />
      </div>

      <div className="row movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className={`col-lg-3 col-md-4 col-sm-6 col-12 movie-card ${
                zoomedCard === movie.id ? "zoomed" : ""
              }`}
              onClick={() => handleCardClick(movie.id)}
            >
              <Link to={`/movies/${movie.id}`} className="movie-link">
                <MaincardSS 
                  id={movie.movie_id}
                  movie_name={movie.movie_name}
                  img_name={
                    movie.img_name.startsWith("http")
                      ? movie.img_name
                      : `/images/${movie.img_name}`
                  }
                />
              </Link>
            </div>
          ))
        ) : (
          <p className="no-movies-text">No movies found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default MovieCards;
