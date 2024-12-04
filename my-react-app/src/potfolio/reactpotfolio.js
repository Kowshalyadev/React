import React from 'react'; 
import {Navbar,Nav,Container,NavLink} from 'react-bootstrap';
import {  Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import kowshiphoto from "./kowshi_photo.jpeg"
// import Home from './home';
function BasicExample(){
    return(<>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Aboutus">Skills</Nav.Link>
            <Nav.Link href="#Contactus">ContactUS</Nav.Link>
          </Nav>
        </Container>
        <NavLink id="/"><h1>Home</h1></NavLink>
      </Navbar>
      <div>
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
      </div>


      <div>
      <Container className="mt-5">
        <Row className="align-items-center mb-5">
            <Col xs={12} md={5} lg={5} style={{border:"2px solid black"}}>
            <h3 id='Aboutus'>Frontend Skills</h3>
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

      </div>

      <div>
      <Container>
    <Row id="contact" className="text-center mt-5">
        <h2 id='Contactus'>Contact Me</h2>
        <p className="text-muted">
          Interested in working together? Here's how to reach me!
        </p>
      </Row>
    <Row className="justify-content-center">
        {/* Contact Card */}
        <Col xs={12} md={6} lg={4}>
          <Card className="p-3">
            <Card.Body>
              <h4>Email:</h4>
              <p>
                <a href="mailto:your.email@example.com">
                 Kowshalyagurram@gmail.com
                </a>
              </p>
              <h4>Phone:</h4>
              <p>
                <a href="tel:+1234567890">+123 456 7890</a>
              </p>
              <h4>LinkedIn:</h4>
              <p>
                <a
                  href="https://www.linkedin.com/in/kowshalya-gurram-508367259/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/your-profile
                </a>
              </p>
              <Button
                variant="primary"
                href="https://github.com/Kowshalyadev/stasks"
                target="_blank"
              >
                Visit My GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
      </div>
    </>)
}
export default BasicExample;
