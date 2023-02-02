import React from "react";
import { Button, Form } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const OptForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h5 className="text-center mb-3">
        Ready to watch? Enter your email to create or restart your membership.
      </h5>
      <div className="features">
        <Form.Control
          style={{ width: "90%" }}
          className=" p-3 rounded-0"
          placeholder="Email address"
        />
        <Button
          onClick={() => navigate("/signin")}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            width: "47%",
            padding: "14px",
            borderRadius: 0,
            border: 0,
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Get Started
          <IoIosArrowForward size="1.6rem" />
        </Button>
      </div>
    </div>
  );
};

export default OptForm;
