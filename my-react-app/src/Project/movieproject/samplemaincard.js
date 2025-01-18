// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SampleMainCards({ title, imageUrl, description}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default SampleMainCards;