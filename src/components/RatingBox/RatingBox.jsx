// MoviePage
import React from "react";
import styles from "./RatingBox.module.scss";

const RatingBox = (props) => {
  return (
    // <div className={`${props.className} ${styles.RatingBox}`}>
    <div className={props.className}>
      <div className={styles.imdb}>
        <p>IMDB RATING</p>
        <p>
          <strong className={styles.imdbScore}>{props.imdbScore}</strong>/10
        </p>
      </div>
      <div className={styles.vote}>
        <p>GIVE IT YOUR VOTE</p>
        <button type="button" className="like">
          like
        </button>
        <button type="button" className="dislike">
          dislike
        </button>
      </div>
      <div className={styles.popularity}>
        <p>POPULARITY</p>
        <p>
          <strong>{props.popularity}</strong>{" "}
          <mark
            className={styles.popularityDelta}
            id={
              props.popularityDelta[0] === "+"
                ? styles.increased
                : styles.decreased
            }
          >
            {" "}
            {props.popularityDelta}
          </mark>
        </p>
      </div>
    </div>
  );
};

export default RatingBox;
