import React from "react";
import AliceCarousel from "react-alice-carousel";
import { useSelector } from "react-redux";
import "../../../../style/CastCarousel.css";
import NoImage from "../../../../assets/images/NoImage.jpg";
const CastCarousel = ({ data }) => {
  const { url } = useSelector((state) => state.home);
  return (
    <div>
      {data?.length > 0 && (
        <>
          <h1 className="mb-4">Top Cast</h1>
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
            {data?.map((item) => {
              const imgUrl = item?.profile_path
                ? url.profile + item?.profile_path
                : NoImage;
              return (
                <div key={item.index} className="cast-carousel">
                  <div className="profile-img">
                    <img src={imgUrl} />
                  </div>
                  <p className="name">{item?.name}</p>
                  <p className="character">{item?.character}</p>
                </div>
              );
            })}
          </AliceCarousel>
        </>
      )}
    </div>
  );
};

export default CastCarousel;
