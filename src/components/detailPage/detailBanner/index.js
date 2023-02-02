import moment from "moment/moment";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UseFetch from "../../../hooks";
import Separator from "../../common/Separate";
import Footer from "../../footer";
import "../../../style/Detailpage.css";
import CircleRating from "../../common/CircularProgressbar";
import { PlayIcon } from "../../common/PlayBtn";
import Loader from "../../common/loader";
import logo from "../../../assets/images/logo.png";
import CommonNav from "../../common/CommonNav";
import VideoPopup from "../../videoPopup";
const DetailPageBanner = ({ video, crew }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { url } = useSelector((state) => state.home);
  const { mediaType, id } = useParams();
  const { data, loading } = UseFetch(`/${mediaType}/${id}`);
  const toHourAndMinutes = (totalMinutes) => {
    const hour = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hour}h ${minutes > 0 ? `${minutes}m` : ""}`;
  };
  const director = crew?.filter((dir) => dir.job === "Director");
  const writer = crew?.filter(
    (wri) =>
      wri.job === "Screenplay" || wri.job === "Story" || wri.job === "Writer"
  );
  if (loading) return <Loader />;
  return (
    <div style={{ background: "black" }}>
      <CommonNav />
      <Container sp>
        <Row className="justify-content-center ">
          <Col xs={11} lg={6} className="col-sm-offset-2">
            <div className="detail-img">
              <img
                src={url.backdrop + data?.poster_path}
                width="100%"
                height="100%"
              />
            </div>
          </Col>
          <Col xs={11} lg={6}>
            <h2>
              {data?.title} ({moment(data?.release_date).format("YYYY")})
            </h2>
            <h6 style={{ color: "gray" }}>{data?.tagline}</h6>
            <div className=" rating">
              <div className="circle_progress">
                <CircleRating rating={data?.vote_average?.toFixed(1)} />
              </div>
              <div
                className="playBtn"
                onClick={() => {
                  setShowVideo(true);
                  setVideoId(video?.key);
                }}
              >
                <PlayIcon />
                <span className="text">Watch Trailor</span>
              </div>
            </div>
            <h3>Overview</h3>
            <h6>{data?.overview}</h6>
            <div className="info">
              <div className="info_item">
                <span className="text-bold">Status: </span>
                <span className="text-thin">{data?.status}</span>
              </div>
              {data?.release_date && (
                <div className="info_item">
                  <span className="text-bold">Released Date: </span>
                  <span className="text-thin">
                    {moment(data?.release_date).format("MMM DD ,YYYY")}
                  </span>
                </div>
              )}
              {data?.runtime && (
                <div className="info_item">
                  <span className="text-bold">Runtime: </span>
                  <span className="text-thin">
                    {toHourAndMinutes(data?.runtime)}
                  </span>
                </div>
              )}
            </div>
            {director?.length > 0 && (
              <div className="info">
                <div className="info_item">
                  <span className="text-bold">Director: </span>
                  <span className="text-thin">
                    {director?.map((d, i) => (
                      <span className="text-thin" key={i}>
                        {d?.name}
                        {director?.length - 1 !== i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            )}
            {writer?.length > 0 && (
              <div className="info">
                <div className="info_item">
                  <span className="text-bold">Writer: </span>
                  <span className="text-thin">
                    {writer?.map((d, i) => (
                      <span className="text-thin" key={i}>
                        {d?.name}
                        {writer?.length - 1 !== i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            )}
            {data?.created_by?.length > 0 && (
              <div className="info">
                <div className="info_item">
                  <span className="text-bold">Creator: </span>
                  <span className="text-thin">
                    {data?.created_by?.map((d, i) => (
                      <span className="text-thin" key={i}>
                        {d?.name}
                        {writer?.length - 1 !== i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            )}
            <VideoPopup
              showVideo={showVideo}
              setShowVideo={setShowVideo}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPageBanner;
