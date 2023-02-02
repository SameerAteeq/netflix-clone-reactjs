import React from "react";
import AliceCarousel from "react-alice-carousel";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../../style/carousel.css";
const CommonCarousel = ({ data, loading, endpoint }) => {
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  return (
    <div className="common">
      <AliceCarousel
        // disableButtonsControls
        // renderPrevButton={() => {
        //   return <p className="">Previous Item</p>;
        // }}
        // renderNextButton={() => {
        //   return <p className="">Next Item</p>;
        // }}
        disableDotsControls
        responsive={{
          0: {
            items: 2,
          },
          520: {
            items: 3,
          },
          600: {
            items: 4,
          },
          1024: {
            items: 5,
          },
          1200: {
            items: 7,
            itemsFit: "contain",
          },
        }}
      >
        {data?.results?.map((item) => {
          const posterUrl = item.poster_path
            ? url.poster + item.poster_path
            : "";
          return (
            <div
              key={item.index}
              className="poster-img"
              onClick={() =>
                navigate(`/${item?.media_type || endpoint}/${item?.id}`)
              }
            >
              <img src={posterUrl} />
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default CommonCarousel;
