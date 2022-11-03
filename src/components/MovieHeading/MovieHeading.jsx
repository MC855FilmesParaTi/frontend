// HomePage
import styles from "./MovieHeading.module.scss";

const MovieHeading = (props) => {
  return (
    <h1 className={`${props.className} ${styles.MovieHeading}`}>
      {props.heading}
    </h1>
  );
};

export default MovieHeading;
