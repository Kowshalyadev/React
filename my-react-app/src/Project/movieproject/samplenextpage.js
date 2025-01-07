import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Maincards from "./moviecards";

function MovieDetails() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async (movie_id) => {
      const url = `https://movies-api14.p.rapidapi.com/movies/${movie_id}`;
      console.log(url)
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "d8348a3f0dmshaff60b54df404b1p1f331fjsn26db868882b9",
          "x-rapidapi-host": "movies-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movie_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  // Safely extract movie details with fallbacks
  const { movie_name = "Title not available", hero_name = "Release date not available", poster_path } = movie;
  const img_nam = poster_path || "default_image_url.jpg";

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Maincards title={movie_name} imageUrl={img_nam} description={`Release Date: ${hero_name}`} />
    </div>
  );
}

export default MovieDetails;
