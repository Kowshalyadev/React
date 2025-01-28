import React from "react";
import Card from "react-bootstrap/Card"; // Ensure react-bootstrap is installed

function MaincardSS({  movie_name, img_name, id }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }} key={id}>
      <Card.Img
        variant="top"
        src={img_name || "fallback-image-url.jpg"} // Fallback image for missing URLs
        alt={ movie_name || "Movie Poster"}
        height="190"
      />
      <Card.Body>
        <Card.Text style={{fontSize:"17px",color:"orange"}}><strong style={{color:"black"}}>Title:</strong> {movie_name || "Unknown Movie"}</Card.Text>
        {/* <Card.Text>
          <strong>Hero Name:</strong> {hero_name || "No information available"}
        </Card.Text> */}
      </Card.Body>
    </Card>
  );
}

export default MaincardSS;
