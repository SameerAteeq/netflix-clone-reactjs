import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { FAQData } from "../../../data/jumbo";
import "../../../style/Accordin.css";
import OptForm from "../../common/OptForm";
import MyAccordion from "./myAccordion";

function FAQ() {
  const [open, setOpen] = useState({ isOpen: false, index: null });
  return (
    <Container style={{ maxWidth: "680px" }} className="my-5">
      <Row className="justify-content-center ">
        <Col xs={12}>
          <h1 className="mb-4">Frequently Asked Questions</h1>
          {FAQData?.map((item, i) => (
            <MyAccordion item={item} index={i} />
            // <div key={item.id}>
            //   <div className="my-2">
            //     <div className="d-flex justify-content-between align-items-center top">
            //       <h4>{item?.header}</h4>
            //       <div
            //         style={{ cursor: "pointer" }}
            //         className="cursor-pointer"
            //         onClick={() =>
            //           setOpen({
            //             isOpen: !open?.isOpen,
            //             index: i,
            //           })
            //         }
            //       >
            //         {open?.isOpen && open?.index === i ? (
            //           <IoMdClose size="1.8rem" />
            //         ) : (
            //           <MdAdd size="1.8rem" />
            //         )}
            //       </div>
            //     </div>
            //     <div
            //       style={{
            //         display:
            //           open?.isOpen && open?.index === i ? "block" : "none",
            //       }}
            //       className="acc-body"
            //     >
            //       <h4>{item?.body}</h4>
            //     </div>
            //   </div>
            // </div>
          ))}
          <div className="my-5">
            <OptForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
