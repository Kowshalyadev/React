import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Spinner } from "react-bootstrap";

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
    // return (
    //   <div className="spinner-container text-center text-primary">
    //     <Spinner animation="border" role="status" className="spinner">
    //       <span className="visually-hidden">Loading...</span>
    //     </Spinner>
    //     {/* <p>Loading movies...</p> */}
    //   </div>
    // );
    return <div className="text-center text-primary">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="text-center text-warning">Movie not found.</div>;
  }

  const { movie_name, hero_name, img_name, heroine_name, villain_name, genre, rating } = movie;

  return (
    <div
      style={{
        // background: "linear-gradient(135deg, #ffecd2,rgb(252, 223, 159))", 
        backgroundColor:"black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="container py-4">
      <div
  className="row align-items-center  shadow rounded p-4"
  style={{
    // border: "2px solid transparent",
    // borderColor:"white",
    border: "1px solid #ffffff",
    backgroundColor:"black",
    // borderImage: "linear-gradient(45deg,rgb(222, 161, 29), #ffffff) 1", // Yellow & White gradient
    boxShadow: "0px 4px 6px #ffffff"
  }}
>

        {/* <div className="row align-items-center bg-drak shadow rounded p-4" style={{border:"2px solid white"}}> */}
          {/* Left Column: Image */}
          <div className="col-md-6 text-center">
            <img
              src={img_name || "fallback-image-url.jpg"}
              alt={movie_name || "Movie Poster"}
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                border: "1px solid rgb(148, 116, 99)",
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
                // fontSize: "0.5rem", 
                // fontFamily: "Roboto"
              }}
            >
              <h2 className="mb-3" style={{ fontSize: "2rem",color:"rgb(222, 161, 29)",display:"flex",justifyContent:"center" }}>
                {movie_name || "Unknown Movie"}
              </h2>
              <p style={{ fontSize: "1rem",color:"rgb(222, 161, 29)", 
                fontFamily: "Roboto"}}>
                <strong style={{color:"black", fontSize: "1rem", fontFamily: "Roboto"}}>Hero Name:</strong> {hero_name || "No information available"}
              </p>
              <p style={{ fontSize: "1rem",color:"rgb(222, 161, 29)",fontFamily: "Roboto" }}>
                <strong  style={{color:"black", fontSize: "1rem", fontFamily: "Roboto"}}>Heroine Name:</strong > {heroine_name || "Not available"}
              </p>
              <p style={{ fontSize: "1rem",color:"rgb(222, 161, 29)",fontFamily: "Roboto" }}>
                <strong  style={{color:"black", fontSize: "1rem", fontFamily: "Roboto"}}>Villain Name:</strong > {villain_name || "Not available"}
              </p>
              <p style={{ fontSize: "1rem",color:"rgb(222, 161, 29)",fontFamily: "Roboto" }}>
                <strong  style={{color:"black", fontSize: "1rem", fontFamily: "Roboto"}}>Genre:</strong > {genre || "Genre not specified"}
              </p>
              <p style={{ fontSize: "1rem",color:"rgb(222, 161, 29)",fontFamily: "Roboto" }}>
                <strong  style={{color:"black", fontSize: "1rem", fontFamily: "Roboto"}}>Rating:</strong > {rating || "5"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
