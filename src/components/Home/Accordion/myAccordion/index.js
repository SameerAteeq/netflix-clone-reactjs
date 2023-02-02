import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdAdd } from "react-icons/md";

const MyAccordion = ({ item, index }) => {
  const [open, setOpen] = useState(null);
  const toggle = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };
  return (
    <div key={item.id}>
      <div className="my-2">
        <div className="d-flex justify-content-between align-items-center top">
          <h4>{item?.header}</h4>
          <div
            style={{ cursor: "pointer" }}
            className="cursor-pointer"
            onClick={() => toggle(index)}
          >
            {open === index ? (
              <IoMdClose size="1.8rem" />
            ) : (
              <MdAdd size="1.8rem" />
            )}
          </div>
        </div>
        <div
          //   style={{
          //     display: open === index ? "block " : "none",
          //     transition: "all 0.5s ease-in-out",
          //   }}
          className={`acc-body ${open === index ? "acc-body-show" : ""}`}
        >
          <h4>{item?.body}</h4>
        </div>
      </div>
    </div>
  );
};

export default MyAccordion;
