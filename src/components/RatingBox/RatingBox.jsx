// MoviePage
import React from "react";
import styles from "./RatingBox.module.scss";

const RatingBox = (props) => {
  return (
    <div className={`${props.className} ${styles.RatingBox}`}>
      <div className={styles.Imdb}>
        <p>IMDB RATING</p>
        <p>
          <strong>{props.imdbScore}</strong>/10
        </p>
      </div>
      <div className={styles.Vote}>
        <p>GIVE IT YOUR VOTE</p>
        <button type="button" className="like">
          like
        </button>
        <button type="button" className="dislike">
          dislike
        </button>
      </div>
      <div className={styles.Popularity}>
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