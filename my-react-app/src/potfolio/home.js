
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import kowshiphoto from "./kowshi_photo.jpeg";
// import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate=useNavigate()
  return (
    <Container className="mt-5">
      {/* Introduction Section */}
      <Row className="align-items-center mb-5">
        {/* Photo */}
        <Col xs={12} md={4} className="text-center mb-4">
          <img
            src={kowshiphoto}// Replace with your photo URL
            alt="Your Name"
            className="img-fluid rounded-circle"
            style={{ width: "150px", height: "150px" }}
          />
        </Col>
        {/* About Me */}
        <Col xs={12} md={8}>
          <h1>Hello, I'm Kowshalya</h1>
          <p>
            I am a passionate developer specializing in creating modern,
            responsive web applications. My goal is to build intuitive
            experiences for users. Feel free to explore my portfolio or
            contact me directly!
          </p>
          <Button variant="primary" href="#contact">
            Contact Me
          </Button>
        </Col>
      </Row>

      {/* Projects Section */}
      <Row id="projects" className="text-center mb-5">
        <h2>Projects</h2>
        <p className="text-muted">Enhancing Search Result Acuuracy and personalization for google users</p>
      </Row>
      <Row>
        {/* Example Project 1 */}
        <Col xs={12} md={12} lg={12} className="mb-4">
          <Card>
            {/* <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Project 1"
            /> */}
            <Card.Body>
              <Card.Title>Project One</Card.Title>
              <Card.Text>
              Enhancing search result accuracy and personalization for Google users involves leveraging user behavior data such as search history and click patterns to prioritize relevant content. Contextual information, including location, time, and device usage, can be integrated to tailor results more effectively. Advanced AI algorithms play a critical role in understanding user intent and dynamically refining search outcomes. Additionally, customizable settings empower users to define preferences, ensuring results align closely with their unique interests and needs.
              </Card.Text>
              <Button variant="primary" href="file:///C:/Users/kowsh/Downloads/project/Enhancing%20Search%20Result%20Accuracy%20and%20Personalization%20for%20Google%20Users.%20(1).html">
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Example Project 2 */}
        {/* Add more projects similarly */}
      </Row>

      
     </Container>
  );
}

export default Home;
