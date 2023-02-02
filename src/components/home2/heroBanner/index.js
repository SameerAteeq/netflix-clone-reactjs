import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UseFetch from "../../../hooks";
import "../../../style/heroBanner.css";
import logo from "../../../assets/images/logo.png";
import { Button } from "react-bootstrap";
import { truncate } from "../../../utils/truncate";
import CommonNav from "../../common/CommonNav";
const HeroBanner = () => {
  const [show, setShow] = useState(false);
  const [heroData, setData] = useState(null);
  const [herobg, setHerobg] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = UseFetch("/movie/popular");

  useEffect(() => {
    const randomData = data?.results?.[Math.floor(Math.random() * 20)];
    const bg = url.backdrop + randomData?.backdrop_path;
    setData(randomData);
    setHerobg(bg);
  }, [data]);

  return (
    <>
      <div
        className="main-div"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        <CommonNav />
        {/* <div className={`${show ? "navBlack" : ""} navbar`}>
          <div>
            <img
              style={{ cursor: "pointer" }}
              // onClick={() => navigate("/")}
              src={logo}
              height="40px"
              width="120px"
            />
          </div>
          <div>
            <Button
              // onClick={() => navigate("/signin")}
              style={{ background: "red", border: 0 }}
              className="btn"
            >
              Sign In
            </Button>
          </div>
        </div> */}
        <div className="content-div ">
          <h1 className="title">{heroData?.title}</h1>
          <p className="overview">{truncate(heroData?.overview, 150)}</p>
          <div className="d-flex align-items-center gap-2 ">
            <Button
              style={{
                background: "#fff",
                color: "black",
                border: 0,
                fontSize: "20px",
                padding: "6px 12px",
              }}
            >
              Play
            </Button>
            <Button
              style={{
                opacity: 0.7,
                background: "gray",
                color: "white",
                border: 0,
                fontSize: "20px",
                padding: "6px 12px",
              }}
            >
              More Info
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
