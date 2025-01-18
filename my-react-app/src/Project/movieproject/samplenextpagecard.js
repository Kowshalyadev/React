import React from "react";
import Card from "react-bootstrap/Card"; // Ensure react-bootstrap is installed

function SampleNextPageCard({  title, imageUrl,description,id }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }} key={id}>
      <Card.Img
        variant="top"
        src={imageUrl || "fallback-image-url.jpg"} // Fallback image for missing URLs
        alt={ imageUrl || "Movie Poster"}
        height="190"
      />
      <Card.Body>
        <Card.Text><strong>Title:</strong> {title || "Unknown Movie"}</Card.Text>
        <Card.Text>
          <strong>Hero Name:</strong> {description || "No information available"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SampleNextPageCard;
