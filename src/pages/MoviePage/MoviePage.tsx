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
              <img src={movieData.poster} />
              <div>
                {movieData.year} <span>&#8729;</span> {movieData.duration}
              </div>
              {/* <PosterInfo
                poster={movieData.poster}
                year={movieData.year}
                duration={movieData.duration}
              /> */}
            </div>
            <h1 className={styles.TitleContainer}>{movieData.title}</h1>
            <div className={styles.RatingsContainer}>
              <div className={styles.Imdb}>
                <p>IMDB RATING</p>
                <p>
                  <strong>{movieData.imdbScore}</strong>/10
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
                  <strong>{movieData.popularity}</strong>{" "}
                  <mark>{movieData.popularityDelta}</mark>
                </p>
              </div>
            </div>
            <div className={styles.DescriptionContainer}>
              <p>
                <strong>Directors</strong> {movieData.directors}
              </p>
              <p>
                <strong>Writers</strong> {movieData.writers}
              </p>
              <p>
                <strong>Stars</strong> {movieData.starActors}
              </p>
              <p>
                <strong>About</strong> {movieData.description}
              </p>
            </div>
            {/* <div className={styles.InfoContainer}>
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
            </div> */}
          </>
        )}
      </div>
    </AppLayout>
  );
};

export default MoviePage;
