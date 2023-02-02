import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../../style/Circularprogress.css";
const CircleRating = ({ rating }) => {
  return (
    <div className="circular_rating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: "red",
          pathTransitionDuration: 0.5,
          // trailColor: { stroke: "transparent" },
        })}
      />
    </div>
  );
};

export default CircleRating;
