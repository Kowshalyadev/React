import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function ProfileCards({ data }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body style={{ height: "150px", overflowY: "scroll" }}>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant="primary">{data.color}</Button>
      </Card.Footer>
    </Card>
  );
}
export default ProfileCards;