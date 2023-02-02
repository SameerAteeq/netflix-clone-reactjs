import React from "react";
import ReactPlayer from "react-player";
import "../../style/videoPopup.css";
const VideoPopup = ({ showVideo, setShowVideo, videoId, setVideoId }) => {
  const handleClick = () => {
    setShowVideo(false);
    setVideoId(null);
  };
  return (
    <div className={`videoPopup ${showVideo ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={handleClick}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={handleClick}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
