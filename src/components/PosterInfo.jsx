// MoviePage
import React from "react";

const PosterInfo = (props) => {
  console.log("poster info", props);

  return (
    <div id="PosterInfo">
      <img src={props.Poster} alt="movie"></img>
      <p>
        {props.Year} <span>&#8729;</span> {props.Duration}
      </p>
    </div>
  );
};

export default PosterInfo;
