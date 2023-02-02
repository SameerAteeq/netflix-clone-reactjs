import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { jumboData } from "../../../data/jumbo";
import Separator from "../../common/Separate";
const Jumbo = () => {
  return (
    <div style={{ background: "black", color: "#ff", width: "100%" }}>
      {jumboData?.map((item) => (
        <div key={item.id}>
          <Container fluid className="p-3 ">
            <Row className="px-5 justify-content-center align-items-center w-100">
              <Col xs={12} lg={6} className="text-center ">
                <h1 className=" fw-bold mb-4">{item?.title}</h1>
                <h4>{item?.subTitle}</h4>
              </Col>
              <Col xs={12} lg={6} className="text-center ">
                <img
                  src={item?.url}
                  alt={item?.alt}
                  width="100%"
                  height="100%"
                />
              </Col>
            </Row>
          </Container>
          <Separator />
        </div>
      ))}
    </div>
  );
};

export default Jumbo;
