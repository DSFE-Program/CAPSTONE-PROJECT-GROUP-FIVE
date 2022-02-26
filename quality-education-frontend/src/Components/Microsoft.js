import React from "react"
import "./Index.css"
import {Container, Row, Col, Card, CardGroup} from "react-bootstrap"
import anything from "../video/anything.mp4"
import CardHeader from "react-bootstrap/esm/CardHeader"
const Microsoft = () => (
  <Container className="Container1" >
    <h1>Welcome to Tecspik</h1>
    <Row className="Row">
      <Col lg={6}>
        <p><strong>Microsoft Word Crash Course</strong></p>
        <video className="embed-responsive embed-responsive-16by9"  controls 
        width={700}
        height={472}>
          <source className="embed-responsive-item" src={anything} type="video/mp4" />
        </video>
      </Col>
      <Col lg={2}> </Col>
      <Col lg={4}>
      <Card>
        <CardHeader as="h5">Microsoft Word</CardHeader>
        <Card.Body>
          <Card.Title>Introduction to Microsoft Word</Card.Title>
          <Card.Text>
            In this course students learn the basics like:
           <p> 1. What is Microsoft Word?</p>
            <p> 2. Tools used in Microsoft Word.</p>
           <p> 3. How to use Microsft Word.</p>
            <p>4. When to use Microsoft Word</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    <Row className="Row2">
      <Col lg={6}>
        
      </Col>

    </Row>
  </Container>
  

  
)



export default Microsoft;





