import React from "react";
import Card from "react-bootstrap/Card"; // Ensure react-bootstrap is installed

function Maincard({ title, imageUrl, description }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={imageUrl || "fallback-image-url.jpg"} // Fallback image for missing URLs
        alt="Movie poster"
        height="190"
      />
      <Card.Body>
        <Card.Text>Title: {title || "Unknown Movie"}</Card.Text>
        <Card.Text>Hero Name: {description || "No information available"}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Maincard;
