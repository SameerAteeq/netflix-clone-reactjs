import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import bg from "../../assets/images/bg.jpg";
import "../../style/Navbar.css";
import { IoIosArrowForward } from "react-icons/io";
import Separator from "../common/Separate";
import OptForm from "../common/OptForm";
import OptContent from "../common/OptContent";
import HeaderWrapper from "../common/HeaderWrapper";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper className="home-bg">
      <div className="d-flex justify-content-between align-items-center p-4 bg-transparent">
        <div
          style={{ width: "120px", height: "40px", background: "transparent" }}
        >
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            src={Logo}
            className="w-100 h-100 bg-transparent"
          />
        </div>
        <div>
          <Button
            onClick={() => navigate("/signin")}
            style={{ background: "red", border: 0 }}
            className="btn"
          >
            Sign In
          </Button>
        </div>
      </div>
      <OptContent />
    </HeaderWrapper>
  );
};

export default Navbar;
