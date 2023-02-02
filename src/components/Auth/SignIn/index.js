import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HeaderWrapper from "../../common/HeaderWrapper";
import "../../../style/Auth.css";
import Separator from "../../common/Separate";
import Footer from "../../footer";
import logo from "../../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../common/loader";
const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
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
          <Row className="justify-content-center  py-5">
            <Col className="SignWrapper my-5" xs={10} md={7} lg={5}>
              <h1 className="mb-4">Sign In</h1>
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
              <Button onClick={handleClick} className="signin-btn">
                Sign In
              </Button>
              <div>
                <p className="d-flex align-items-center gap-2 my-2">
                  New to Netflix?{" "}
                  <Link style={{ color: "#ffff" }} to="/signup">
                    Sign up now
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

export default SignIn;
