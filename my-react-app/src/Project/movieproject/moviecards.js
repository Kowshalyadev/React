// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Maincard({ key,title, imageUrl }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
    <Card.Img variant="top" src={imageUrl} alt={title} height={200} width={70}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{key}</Card.Text>
      {/* <Button variant="primary">Learn More</Button> */}
    </Card.Body>
  </Card>
  );
}

export default Maincard;