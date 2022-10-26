// MoviePage
import React from "react";

const RatingBox = (props) => {
  return (
    <div className="rating-container">
      <div className="imdb-rating">
        <p>IMDB RATING</p>
        <p>
          <strong>{props.imdbScore}</strong>/10
        </p>
      </div>
      <div className="user-vote">
        <p>GIVE IT YOUR VOTE</p>
        <button type="button" className="like">
          like
        </button>
        <button type="button" className="dislike">
          dislike
        </button>
      </div>
      <div className="popularity">
        <p>POPULARITY</p>
        <p>
          <strong>{props.popularity}</strong>{" "}
          <mark>{props.popularityDelta}</mark>
        </p>
      </div>
    </div>
  );
};

export default RatingBox;
