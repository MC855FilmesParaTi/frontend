import React from "react";
import styles from "./MoviePage.module.scss";
import PosterInfo from "../../components/PosterInfo";
import RatingBox from "../../components/RatingBox";
import FilmDescription from "../../components/FilmDescription";
import MovieListHeading from "../../components/MovieListHeading";

const MoviePage = (props) => {
  return (
    <div className="moviePage">
      <MovieListHeading heading="La Dolce Vita" />
      <PosterInfo
        Poster={props.Poster}
        Year={props.Year}
        Duration={props.Duration}
      />
      <RatingBox
        imdbScore={props.imdbScore}
        Popularity={props.Popularity}
        PopularityDelta={props.PopularityDelta}
      />
      <FilmDescription
        Director={props.Director}
        Writer={props.Writer}
        Stars={props.Stars}
        About={props.About}
      />
    </div>
  );
};

export default MoviePage;
