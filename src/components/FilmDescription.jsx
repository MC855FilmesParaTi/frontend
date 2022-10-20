// MoviePage

import React from "react";

const FilmDescription = (props) => {
  return (
    <div>
      <p>
        <strong>Director</strong> {props.Director}
      </p>
      <p>
        <strong>Writer</strong> {props.Writer}
      </p>
      <p>
        <strong>Stars</strong> {props.Stars}
      </p>
      <p>
        <strong>About</strong> {props.About}
      </p>
    </div>
  );
};

export default FilmDescription;
