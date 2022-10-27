import React from "react";
import { useLoaderData } from "react-router-dom";

import styles from "./MoviePage.module.scss";
import PosterInfo from "../../components/PosterInfo";
import RatingBox from "../../components/RatingBox";
import FilmDescription from "../../components/FilmDescription";
import MovieHeading from "../../components/MovieHeading";
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
      <div className={styles.MoviePage}>
        {movieData && (
          <>
            <div className={styles.PosterContainer}>
              <PosterInfo
                poster={movieData.poster}
                year={movieData.year}
                duration={movieData.duration}
              />
            </div>
            <div className={styles.InfoContainer}>
              <MovieHeading
                className={styles.Title}
                heading={movieData.title}
              />
              <RatingBox
                className={styles.RatingBox}
                imdbScore={movieData.imdbScore}
                popularity={movieData.popularity}
                popularityDelta={movieData.popularityDelta}
              />
              <FilmDescription
                className={styles.Description}
                directors={movieData.directors}
                writers={movieData.writers}
                starActors={movieData.starActors}
                description={movieData.description}
              />
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
};

export default MoviePage;
