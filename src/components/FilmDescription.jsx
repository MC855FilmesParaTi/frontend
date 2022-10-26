// MoviePage

const FilmDescription = (props) => {
  console.log("filmDescription ", props);
  return (
    <div>
      <p>
        <strong>Directors</strong> {props.directors}
      </p>
      <p>
        <strong>Writers</strong> {props.writers}
      </p>
      <p>
        <strong>Stars</strong> {props.starActors}
      </p>
      <p>
        <strong>About</strong> {props.description}
      </p>
    </div>
  );
};

export default FilmDescription;
