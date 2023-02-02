import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HeaderWrapper from "../../common/HeaderWrapper";
import "../../../style/Auth.css";
import Separator from "../../common/Separate";
import Footer from "../../footer";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Loader from "../../common/loader";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home", { replace: true });
    }, 3000);
  };
  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);
  if (loading) return <Loader />;
  return (
    <div>
      <HeaderWrapper className="home-bg">
        <div className="p-4">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            src={logo}
            height="40px"
            width="120px"
          />
        </div>
        <Container className="">
          <Row className="justify-content-center  ">
            <Col className="SignWrapper pb-5" xs={10} md={7} lg={5}>
              <h1 className="mb-4">Sign Up</h1>
              <Form onSubmit={handleClick}>
                <Form.Control
                  style={{ background: "#333", border: 0, color: "#fff" }}
                  className="mb-4 p-3"
                  placeholder="Name"
                  type="text"
                  required
                />
                <Form.Control
                  style={{ background: "#333", border: 0, color: "#fff" }}
                  className="mb-4 p-3"
                  placeholder="Email address"
                  type="email"
                  required
                />
                <Form.Control
                  style={{ background: "#333", border: 0, color: "#fff" }}
                  className="mb-4 p-3"
                  placeholder="Password"
                  type="password"
                  required
                />
                <Button type="submit" className="signin-btn">
                  Sign Up
                </Button>
              </Form>
              <div>
                <p className="d-flex align-items-center gap-2 my-2">
                  Already a user?{" "}
                  <Link style={{ color: "#ffff" }} to="/signin">
                    Sign in now
                  </Link>
                </p>
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </HeaderWrapper>
      <Separator />
      <Footer />
    </div>
  );
};

export default SignUp;
