import React from "react";
import { useLoaderData, redirect } from "react-router-dom";

import styles from "./MoviePage.module.scss";
import PosterInfo from "../../components/PosterInfo/PosterInfo";
import RatingBox from "../../components/RatingBox";
import FilmDescription from "../../components/FilmDescription";
import MovieHeading from "../../components/MovieHeading";
import { getMovieInfo, MovieInfo } from "services/filmesPraTi";
import AppLayout from "components/AppLayout";

export async function loader({ params }: { params: any }) {
  if (!localStorage.getItem("userToken")) {
    return redirect("/login");
  }

  try {
    return await getMovieInfo(params.movieId);
  } catch (e: any) {
    if (e.message === "Auth error") {
      localStorage.removeItem("userToken");
      return redirect("/login");
    }
  }
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
            <PosterInfo
              className={styles.PosterContainer}
              poster={movieData.poster}
              year={movieData.year}
              duration={movieData.duration}
            />

            <h1 className={styles.TitleContainer}>{movieData.title}</h1>

            <RatingBox
              className={styles.RatingsContainer}
              imdbScore={movieData.imdbScore}
              popularity={movieData.popularity}
              popularityDelta={movieData.popularityDelta}
            />

            <FilmDescription
              className={styles.DescriptionContainer}
              directors={movieData.directors}
              writers={movieData.writers}
              starActors={movieData.starActors}
              description={movieData.description}
            />
          </>
        )}
      </div>
    </AppLayout>
  );
};

export default MoviePage;
