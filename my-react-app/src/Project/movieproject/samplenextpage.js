import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SampleNextPageCard from "./samplenextpagecard";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://677e5b8794bde1c1252b9a59.mockapi.io/movie/api/movies/${id}`;
      console.log("urlid",url);  // Log the URL being requested
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
        console.log("API Response:", data);  // Log the response to check for poster_path
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  const { movie_name, hero_name,img_name  } = movie;
  // const img_name = poster_path || "https://example.com/default-image.jpg"; // Fallback image

  // console.log("Image URL:", img_name); // Log the image URL

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <SampleNextPageCard title={movie_name} imageUrl={img_name} description={hero_name} />
    </div>
  );
}

export default MovieDetails;
