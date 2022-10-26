import React from "react";
import { useLoaderData } from "react-router-dom";

import styles from "./MoviePage.module.scss";
import PosterInfo from "../../components/PosterInfo";
import RatingBox from "../../components/RatingBox";
import FilmDescription from "../../components/FilmDescription";
import MovieListHeading from "../../components/MovieListHeading";
import { getMovieInfo, MovieInfo } from "services/filmesPraTi";
import AppLayout from "components/AppLayout";

export async function loader({ params }: { params: any }) {
  return getMovieInfo(params.movieId);
}

interface MoviePageProps {}

const MoviePage = ({}: MoviePageProps) => {
  const movieData: MovieInfo = useLoaderData() as MovieInfo;
  console.log("movie page: ", movieData);
  return (
    <AppLayout>
      <div className="moviePage">
        {movieData && (
          <>
            <MovieListHeading heading={movieData.title} />
            <img src={movieData.poster} />
          </>
        )}
        {/* TODO: use the right movieData properties */}
        <PosterInfo
          Poster={movieData.poster}
          Year={movieData.year}
          Duration={movieData.duration}
        />
        <RatingBox
          imdbScore={movieData.imdbScore}
          Popularity={movieData.popularity}
          PopularityDelta={movieData.popularityDelta}
        />
        <FilmDescription
          Director={movieData.directors}
          Writer={movieData.writers}
          Stars={movieData.starActors}
          About={movieData.description}
        />
      </div>
    </AppLayout>
  );
};

export default MoviePage;
