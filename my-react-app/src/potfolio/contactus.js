import React from "react";

import { Container, Row, Col, Card,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Contactus(){
    return(<>
    <Container>
    <Row id="contact" className="text-center mt-5">
        <h2>Contact Me</h2>
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
    
    </>)
}
export default Contactus