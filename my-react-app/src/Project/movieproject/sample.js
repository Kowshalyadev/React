import React, { useState, useEffect } from "react";
import Maincard from "./moviecards";
import soundEffect from "./button-202966.mp3";
import { Link } from "react-router-dom";
import Search from "./search.png";
import "./sample.css"; // Ensure this contains responsive and animation styles

function Sampes() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const url = "https://movies-api14.p.rapidapi.com/movies";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d8348a3f0dmshaff60b54df404b1p1f331fjsn26db868882b9",
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.movies && Array.isArray(data.movies)) {
          setMovies(data.movies);
        } else {
          setMovies([]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const playSound = () => {
    const audio = new Audio(soundEffect);
    audio.play();
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title &&
    typeof movie.title === "string" &&
    movie.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  );

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
        <img
          src={Search}
          alt="search icon"
          className="search-icon"
          onClick={() => {}}
        />
      </div>
      <div className="movies-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div key={index} className="movie-card" onClick={playSound}>
              <Link to={`/movies/${movie._id}`} className="movie-link">
                <Maincard
                  title={movie.title}
                  imageUrl={movie.poster_path || "default_image_url.jpg"}
                  description={movie.release_date || "Release date not available"}
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
