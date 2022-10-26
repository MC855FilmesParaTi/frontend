// MoviePage
import React from "react";

const PosterInfo = (props) => {
  console.log("poster info", props);

  return (
    <div id="PosterInfo">
      <img src={props.poster} alt="movie"></img>
      <p>
        {props.year} <span>&#8729;</span> {props.duration}
      </p>
    </div>
  );
};

export default PosterInfo;
