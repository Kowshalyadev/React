import React from "react";
import Card from "react-bootstrap/Card";

function Maincard({ title, imageUrl, description }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} alt="Movie poster" />
      <Card.Body>
        <Card.Text>Title: {title}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Maincard;
