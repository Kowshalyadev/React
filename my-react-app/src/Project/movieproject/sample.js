import React, { useState, useEffect, useCallback } from "react";
import Maincard from "./moviecards"; // Import the updated Maincard component
import soundEffect from "./button-202966.mp3"; // Path to your audio file
import SearchIcon from "./search.png"; // Path to your search icon
import { Link } from "react-router-dom";
import "./sample.css"; // Your CSS file

function Sampes() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const url = "https://67767e3a12a55a9a7d0be890.mockapi.io/movies/api/movies";

  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 429) {
          console.log("Rate limit exceeded, retrying...");
          setTimeout(fetchMovies, 5000);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched Data:", data);

      const moviesData = Array.isArray(data) ? data : data.movies || [];
      setMovies(moviesData);
      localStorage.setItem("movies", JSON.stringify(moviesData));
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const cachedMovies = localStorage.getItem("movies");
    if (cachedMovies) {
      try {
        setMovies(JSON.parse(cachedMovies));
        setLoading(false);
      } catch {
        fetchMovies();
      }
    } else {
      fetchMovies();
    }
  }, [fetchMovies]);

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const playSound = () => {
    const audio = new Audio(soundEffect);
    audio.play();
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.movie_name &&
      typeof movie.movie_name === "string" &&
      movie.movie_name.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log("Filtered Movies:", filteredMovies);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Movie Finder</h1>
      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          placeholder="Search for a movie..."
          className="search-input"
        />
        <img src={SearchIcon} alt="Search icon" className="search-icon" />
      </div>
      <div className="movies-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div key={index} className="movie-card" onClick={playSound}>
              <Link to={`/movies/${movie.movie_id}`} className="movie-link">
              <Maincard
                title={movie.movie_name || "Unknown Movie"}
                imageUrl={movie.img_name || "fallback-image-url.jpg"}
                description={movie.hero_name || "No hero information available"}
                movie_id={movie.movie_id}
              />
            </Link>
            </div>
          ))
        ) : (
          <div className="no-movies">No movies found. Try a different search.</div>
        )}
      </div>
    </div>
  );
}

export default Sampes;
