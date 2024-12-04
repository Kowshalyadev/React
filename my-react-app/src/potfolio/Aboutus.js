import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Aboutus(){
    return(<>
    
    <Container className="mt-5">
        <Row className="align-items-center mb-5">
            <Col xs={12} md={5} lg={5} style={{border:"2px solid black"}}>
            <h3>Frontend Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React js</li>

            </ul>
            </Col>
            <Col xs={12} md={6} lg={6} className="mt-4" style={{border:"2px solid black",display:"grid",margin:"12px",height:"155px"}}>
            <h3>Backend Skills</h3>
            <ul>
                <li>PYTHON</li>
                <li>SQL</li>
                <li>NODE JS</li>

            </ul>
            </Col>

        </Row>
    </Container>
    </>)
}
export default Aboutus