import React from "react";
import { useSelector } from "react-redux";
import CastCarousel from "./CastCarousel";

const Cast = ({ data }) => {
  const { url } = useSelector((state) => state.home);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        padding: "50px",
      }}
    >
      <CastCarousel data={data} />
    </div>
  );
};

export default Cast;
