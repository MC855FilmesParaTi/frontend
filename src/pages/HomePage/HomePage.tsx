import React from "react";
import { Link, useLoaderData } from "react-router-dom";
/* import logo from "assets/Logo.png"; */
import styles from "./HomePage.module.scss";
import AppLayout from "components/AppLayout";
import { getRecommendations, Recommendation } from "services/filmesPraTi";

export async function loader({ params }: { params: any }) {
  return getRecommendations();
}

interface HomePageProperties {}

const HomePage = ({}: HomePageProperties) => {
  const recommendations = useLoaderData() as Array<Recommendation>;
  return (
    <AppLayout>
      <div className={styles.App}>
        {/* <img src={logo} className={styles["App-logo"]} alt="logo" /> */}
        <div className={styles["movRecs"]}>
          {recommendations.map((rec, index) => (
            <div key={index} className={styles["recommendations"]}>
              <div key={index} className={styles["rec-group-name"]}>
                {rec.recName}{" "}
                <button className={styles["refreshButton"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                  >
                    <path d="M24 40q-6.65 0-11.325-4.675Q8 30.65 8 24q0-6.65 4.675-11.325Q17.35 8 24 8q4.25 0 7.45 1.725T37 14.45V8h3v12.7H27.3v-3h8.4q-1.9-3-4.85-4.85Q27.9 11 24 11q-5.45 0-9.225 3.775Q11 18.55 11 24q0 5.45 3.775 9.225Q18.55 37 24 37q4.15 0 7.6-2.375 3.45-2.375 4.8-6.275h3.1q-1.45 5.25-5.75 8.45Q29.45 40 24 40Z" />
                  </svg>
                </button>
              </div>
              {rec.recList.map((movie, indexMovie) => (
                <Link to={`/movie/${movie.id}`} key={indexMovie}>
                  <div className={styles["MovieCard"]}>
                    {/* <h2>{movie.title}</h2> */}
                    <img
                      className={styles["MovieCard__img"]}
                      src={movie.poster}
                      alt={"Poster do filme " + movie.title}
                    />
                    <div className={styles["MovieCard__overlay"]}>
                      <div className={styles["MovieCard__title"]}>
                        {movie.title}
                      </div>
                      {/* <p className="MovieCard__description">
                      Here we have a brick wall.
                    </p> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
