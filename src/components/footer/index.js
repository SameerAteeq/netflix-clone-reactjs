import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../style/Footer.css";
const Footer = () => {
  return (
    <footer>
      <Container style={{ color: "#757575" }} className="py-4 h-100 px-5">
        <Row style={{ color: "#333" }}>
          <p className="mb-3">Questions? Contact us</p>
          <Col xs={6} sm={3} className="footer-links">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </Col>
          <Col xs={6} sm={3} className="footer-links">
            <a href="#">Help center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie preference</a>
            <a href="#">Legal Notices</a>
          </Col>
          <Col xs={6} sm={3} className="footer-links">
            <a href="#">Account</a>
            <a href="#">Ways to watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </Col>
          <Col xs={6} sm={3} className="footer-links">
            <a href="#">Media Center</a>
            <a href="#">Term of Use</a>
            <a href="#">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
