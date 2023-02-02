import React from "react";
import UseFetch from "../../../hooks";
import CommonCarousel from "../../common/carousel";

const RecomendedVideos = ({ mediaType, id }) => {
  const { data } = UseFetch(`/${mediaType}/${id}/recommendations`);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        padding: "50px",
      }}
    >
      {data?.length > 0 && (
        <>
          <h1 className="mb-5">Recommendations</h1>
          <CommonCarousel data={data} />
        </>
      )}
    </div>
  );
};

export default RecomendedVideos;
