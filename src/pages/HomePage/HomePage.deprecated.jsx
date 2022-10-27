// HommePage

import Header from "../../components/Header";
import styles from "./HomePage.module.scss";
import MovieList from "../../components/MovieList";
import MovieListHeading from "../../components/MovieHeading";

const HomePage = () => {
  const movie = {
    Poster: "https://news.artnet.com/app/news-upload/2015/04/lf-256x256.jpg",
    Title: "La Dolce Vita",
    Duration: "2h02min",
  };

  const movies = [movie, movie, movie];

  return (
    <div id="grad1" className={styles.App}>
      <Header />
      <MovieListHeading heading="A Film List" />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
