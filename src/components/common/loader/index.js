import React from "react";
import loadingImg from "../../../assets/images/loading.gif";
const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "black",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <img src={loadingImg} alt="Loading...." />
    </div>
  );
};

export default Loader;
