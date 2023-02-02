import React from "react";
import AliceCarousel from "react-alice-carousel";
import UseFetch from "../../../hooks";
import CommonCarousel from "../../common/carousel";

const Trending = () => {
  const { data, loading } = UseFetch("/trending/all/week");
  const items = [];
  return (
    <div style={{ background: "black", width: "100%", padding: "18px" }}>
      {data && (
        <>
          <h4 className="mb-3">Trending Now</h4>
          <CommonCarousel data={data} loading={loading} />
        </>
      )}
    </div>
  );
};

export default Trending;
