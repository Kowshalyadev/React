import React, { useEffect, useState } from "react";
import Maincard from "./bootstrapcard";

function Displaycards() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch movies data
  useEffect(() => {
    setLoading(true);
    fetch("https://67767e3a12a55a9a7d0be890.mockapi.io/movies/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  // Debounced Search Function
  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = movies.filter((movie) =>
        movie.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }, 300); // Delay search by 300ms

    return () => clearTimeout(timeout); // Cleanup debounce timeout
  }, [searchTerm, movies]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Search Input */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          backgroundImage:
            "url(https://media.istockphoto.com/id/1280857668/photo/dark-life-city-theme-out-of-focus-bokeh-light-from-business-district-urban-skyline-graphic.jpg?s=1024x1024&w=is&k=20&c=JNBBxjc6Y_yj3quYBZnD-y0zyRevaAMKM1HgbtcfCkc=)",
          backgroundSize: "cover",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {loading ? (
          <div style={{ color: "white", fontSize: "18px", marginTop: "20px" }}>
            Loading movies...
          </div>
        ) : filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Maincard
              key={movie.movie_id}
              title={movie.movie_name}
              imageUrl={movie.img_name}
            />
          ))
        ) : (
          <div style={{ color: "white", fontSize: "18px", marginTop: "20px" }}>
            No movies found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}

export default Displaycards;
