import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import logo from "assets/Logo.png";
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
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>HomePage</p>
        <div>
          {recommendations.map((rec) => (
            <>
              <h2>{rec.recName}</h2>
              {rec.recList.map((movie) => (
                <Link to={`/movie/${movie.id}`}>
                  <h2>{movie.title}</h2>
                  <img
                    src={movie.poster}
                    alt={"Poster do filme " + movie.title}
                  />
                </Link>
              ))}
            </>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
