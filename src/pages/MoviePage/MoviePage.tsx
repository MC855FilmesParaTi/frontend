import React from "react";
import { useLoaderData } from "react-router-dom";

import styles from "./MoviePage.module.scss";
import PosterInfo from "../../components/PosterInfo";
import RatingBox from "../../components/RatingBox";
import FilmDescription from "../../components/FilmDescription";
import MovieListHeading from "../../components/MovieListHeading";
import { getMovieInfo, MovieInfo } from "services/filmesPraTi";

export async function loader({ params }: { params: any }) {
  return getMovieInfo(params.movieId);
}

interface MoviePageProps {}

const MoviePage = ({}: MoviePageProps) => {
  const movieData: MovieInfo = useLoaderData() as MovieInfo;

  return (
    <div className="moviePage">
      {movieData && (
        <>
          <MovieListHeading heading={movieData.title} />
          <img src={movieData.poster} />
        </>
      )}
      {/* TODO: use the right movieData properties */}
      {/* <PosterInfo
        Poster={movieData.Poster}
        Year={movieData.Year}
        Duration={movieData.Duration}
      />
      <RatingBox
        imdbScore={movieData.imdbScore}
        Popularity={movieData.Popularity}
        PopularityDelta={movieData.PopularityDelta}
      />
      <FilmDescription
        Director={movieData.Director}
        Writer={movieData.Writer}
        Stars={movieData.Stars}
        About={movieData.About}
      /> */}
    </div>
  );
};

export default MoviePage;
