export interface MovieInfoType {
  id: string;
  title: string;
  poster: string;
  minage: string;
  duration: string;
  directors: string;
  starActors: string;
  description: string;
}

export const getMovieInfo = async (movieId: string) => {
  return {
    id: "tt3423242432",
    title: "Titanic",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    minage: "14",
    duration: "2h35min",
    directors: "Tarantino, Peter Jackson",
    starActors: "Angelina Jolie, Brad Pitt",
    description:
      "A long long agooo there was a Volcanooo who was living underneath the seaaa",
  } as MovieInfoType;
};
