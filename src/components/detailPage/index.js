import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseFetch from "../../hooks";
import Separator from "../common/Separate";
import Footer from "../footer";
import Cast from "./cast";
import DetailPageBanner from "./detailBanner";
import RecomendedVideos from "./recomondation";

const MovieDetailPage = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = UseFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = UseFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
      <DetailPageBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} />
      {/* <RecomendedVideos mediaType={mediaType} id={id} /> */}
      <Separator />
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
