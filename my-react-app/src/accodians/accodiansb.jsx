import React from "react";
import Accordion from 'react-bootstrap/Accordion';
function Accordian(props){
  console.log(props.img)
    return(<>


      <Accordion>
      <Accordion.Item>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
  
       {<img src={props.img} style={{height:"100px"}}/>}
          {/* {props.data.image} */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



export default BasicExample;
    </>)
}
export default Accordian;