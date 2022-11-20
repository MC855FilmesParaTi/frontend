import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { searchMovies, SearchResult } from "services/filmesPraTi";
import AppLayout from "components/AppLayout";

import styles from "./SearchResultsPage.module.scss";

export const loader = async ({ request }: any) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  if (!q) return { searchResults: [] };
  const searchResults = await searchMovies(q);
  return { searchResults };
};

const SearchResultsPage = () => {
  const { searchResults } = useLoaderData() as {
    searchResults: Array<SearchResult>;
  };
  return (
    <AppLayout>
      <div className={styles.HomePage}>
        <h1>Search Results</h1>
        <div className={styles.resultsContainer}>
          {searchResults.map((result) => (
            <Link
              to={`/movie/${result.id}`}
              key={result.id}
              className={styles.cardLink}
            >
              <div className={styles["MovieCard"]}>
                {/* <h2>{movie.title}</h2> */}
                <img
                  className={styles["MovieCard__img"]}
                  src={result.poster}
                  alt={"Poster do filme " + result.title}
                />
                <div className={styles["MovieCard__overlay"]}>
                  <div className={styles["MovieCard__title"]}>
                    {result.title}
                  </div>
                  {/* <p className="MovieCard__description">
                      Here we have a brick wall.
                    </p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default SearchResultsPage;
