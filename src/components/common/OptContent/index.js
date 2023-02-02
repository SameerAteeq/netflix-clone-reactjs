import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OptForm from "../OptForm";
import "../../../style/Navbar.css";
const OptContent = () => {
  return (
    <div>
      <Container className="mid-content d-flex justify-content-center align-items-center">
        <Row className="text-center justify-content-center align-items-center ">
          <Col xs={12}>
            <h1 className="w-100 my-2">Unlimited movies, TV </h1>
            <h1 className="my1">shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <OptForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OptContent;
