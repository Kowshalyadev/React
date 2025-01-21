import React, { useState, useEffect } from "react";
import MovieVedio from "./mainVedio";

function Displaycards() {
  const [showContent, setShowContent] = useState(false);

  // Simulate delay for showing the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); // After 3 seconds, show the content
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const trailers = [
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/K4TOrB7at0Y",
  ];

  return (

    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "flex-start",
    //     width: "100%",
    //     backgroundImage:
    //       "url('https://img.freepik.com/free-vector/film-stripes-reels-realistic-composition-with-light-glows-golden-figurine-award-with-clapper-bobbin_1284-59002.jpg?ga=GA1.1.764478372.1735580017&semt=ais_hybrid')", // Background image
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     paddingTop: "80px",
    //   }}
    // >
    //   {/* Text Content */}
    //   {showContent && (
    //     <div
    //       style={{
    //         backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
    //         color: "white",
    //         padding: "20px 40px",
    //         borderRadius: "10px",
    //         textAlign: "center",
    //         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    //         marginBottom: "40px", // Gap between text and trailers
    //       }}
    //     >
    //       <h2 style={{ margin: 0 }}>A Cinematic Experience</h2>
    //       <p style={{ marginTop: "10px" }}>
    //         Dive into the world of movies and captivating stories.
    //       </p>
    //     </div>
    //   )}

    //   {/* Trailer Section */}
    //   {showContent && (
    //     <div
    //       style={{
    //         display: "grid",
    //         gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    //         gap: "20px",
    //         width: "90%", // Adjust width for better spacing
    //         marginBottom: "40px",
    //       }}
    //     >
    //       {trailers.map((trailer, index) => (
    //         <iframe
    //           key={index}
    //           width="100%"
    //           height="200px"
    //           src={trailer}
    //           title={`Trailer ${index + 1}`}
    //           frameBorder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //           style={{
    //             borderRadius: "10px",
    //             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    //           }}
    //         ></iframe>
    //       ))}
    //     </div>
        
    //   )}
    // </div>
    <MovieVedio/>

  );
}

export default Displaycards;
