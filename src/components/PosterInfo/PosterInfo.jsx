// MoviePage

const PosterInfo = (props) => {
  return (
    <div id="PosterInfo" className={props.className}>
      <img src={props.poster} alt="movie"></img>
      <p>
        {props.year} <span>&#8729;</span> {props.duration}
      </p>
    </div>
  );
};

export default PosterInfo;
