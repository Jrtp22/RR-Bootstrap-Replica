import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function StoreListing() {
  return (
    <Container style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Browse stores in Houston</h2>
      <Row style={{ borderBottom: "1px solid #E8E9EB" }}>
        <Col xs={2}>
          <Image src="[IMG SRC 1]" roundedCircle />
        </Col>
        <Col>
          <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
          <p>Delivery * Pickup</p>
        </Col>
      </Row>
      <Row style={{ borderBottom: "1px solid #E8E9EB" }}>
        <Col xs={2}>
          <Image src="[IMG SRC 2]" roundedCircle />
        </Col>
        <Col>
          <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
          <p>Delivery * Pickup</p>
        </Col>
      </Row>
      <Row style={{ borderBottom: "1px solid #E8E9EB" }}>
        <Col xs={2}>
          <Image src="[IMG SRC 3]" roundedCircle />
        </Col>
        <Col>
          <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
          <p>Delivery</p>
        </Col>
      </Row>
    </Container>
  );
}

export default StoreListing;
