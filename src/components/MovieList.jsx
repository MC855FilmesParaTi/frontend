// HommePage
import React from "react";

const MovieList = (props) => {
  return (
    <div className="images-container d-flex justify-content-start m-3">
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={index}
        >
          <img
            src={movie.Poster}
            alt="movie"
            // onMouseOver={async () => {
            //   const description = await props.getMovieRequest(
            //     movie.imdbID,
            //     true
            //   );
            //   props.addDescription(description);
            // }}
          ></img>
          <div className="overlay d-flex align-items-center justify-content-center">
            <spam>Film Title & Duration</spam>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
