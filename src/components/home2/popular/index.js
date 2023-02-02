import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import UseFetch from "../../../hooks";
import CommonCarousel from "../../common/carousel";

const PopularMovies = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = UseFetch(`/${endpoint}/popular`);
  const items = [];
  return (
    <div style={{ background: "black", width: "100%", padding: "18px" }}>
      {data && (
        <>
          <h4 className="mb-3">Popular Movies</h4>
          <CommonCarousel data={data} loading={loading} endpoint={endpoint} />
        </>
      )}
    </div>
  );
};

export default PopularMovies;
