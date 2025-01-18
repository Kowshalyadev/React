import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://677e5b8794bde1c1252b9a59.mockapi.io/movie/api/movies/${id}`;
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
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-primary">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="text-center text-warning">Movie not found.</div>;
  }

  const { movie_name, hero_name, img_name,heroine_name, villain_name, genre, rating } = movie;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ffecd2, #fcb69f)", // Gradient background
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="container py-4">
        <div className="row align-items-center bg-light shadow rounded p-4">
          {/* Left Column: Image */}
          <div className="col-md-6 text-center">
            <img
              src={img_name || "fallback-image-url.jpg"}
              alt={movie_name || "Movie Poster"}
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                border: "5px solid #6c757d",
              }}
            />
          </div>

          {/* Right Column: Details */}
          <div className="col-md-6">
            <div
              className="p-4 rounded shadow-lg"
              style={{
                background: "#fff",
                color: "#495057",
              }}
            >
              <h2 className="mb-3 text-primary">{movie_name || "Unknown Movie"}</h2>
              <p>
                <strong className="text-secondary">Hero Name:</strong> {hero_name || "No information available"}
              </p>
              <p>
                <strong className="text-secondary">Heroine Name:</strong> {heroine_name || "Not available"}
              </p>
              <p>
                <strong className="text-secondary">villain Name:</strong> {villain_name || "Not available"}
              </p>
              <p>
                <strong className="text-secondary">Genre:</strong> {genre || " Movie genres are stylistic categories that organize films based on criteria such as the setting, characters, plot, mood, tone, and theme. "}
              </p>
              <p>
                <strong className="text-secondary">Rating:</strong> {rating || "5"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
