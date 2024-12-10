import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Display from "../counter/counterapplication/Display";
// import airpods from './images/laptop.webp';



function Profilecard(props){
    return(< div >
    {/* <h1>hello {props.name} from {props.city}</h1> */}
    {/* <Button variant="primary">Primary</Button> */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body style={{height:"150px",overflowY:"scroll"}}>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
         {props.data.description}
        </Card.Text>
      </Card.Body>
      
      <Card.Footer className="text-muted"><Button variant="primary">{props.data.color}</Button></Card.Footer>
    </Card>
    </div>)
}
export default Profilecard