import React, { useEffect, useState } from "react";
import Maincard from "./moviecards";

function Displaycardss() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching movies data from the API
  useEffect(() => {
    const url = "https://movies-api14.p.rapidapi.com/movies";

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
      },
    };

    setLoading(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log to inspect the structure of the API response

        // Check if the data is an array or wrapped inside another property like 'results'
        if (Array.isArray(data)) {
          setMovies(data); // If it's an array, set directly
        } else if (data.results && Array.isArray(data.results)) {
          setMovies(data.results); // If it's wrapped in 'results'
        } else {
          console.error("Movies data is not an array or has no 'results'");
        }
        setFilteredMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  // Filter movies based on the search term
  useEffect(() => {
    if (searchTerm === "") {
      // If search term is empty, display all movies
      setFilteredMovies(movies);
    } else {
      // Otherwise filter based on search term
      const filtered = movies.filter((movie) =>
        movie.movie_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchTerm, movies]);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {loading ? (
          <div>Loading movies...</div>
        ) : filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Maincard
              // key={movie.id} // Ensure each card has a unique key
              // title={movie.movie_name} // Update this to match the correct field
              moviename={movie.contentType}
              releasedate={movie.release_date}
              imageUrl={movie.backdrop_path}
            />
          ))
        ) : (
          <div>No movies found matching "{searchTerm}"</div>
        )}
      </div>
    </div>
  );
}

export default Displaycardss;
