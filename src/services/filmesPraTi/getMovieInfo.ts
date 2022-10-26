export interface MovieInfoType {
  id: string;
  title: string;
  poster: string;
  minage: string;
  duration: string;
  year: string;
  imdbScore: string;
  directors: string;
  writers: string;
  starActors: string;
  description: string;
  popularity: string;
  popularityDelta: string;
}

export const getMovieInfo = async (movieId: string) => {
  return {
    id: "tt0120338",
    title: "Titanic",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    minage: "14",
    duration: "2h35min",
    year: "2002",
    imdbScore: "9.8",
    directors: "Tarantino, Peter Jackson",
    writers: "Tarantino, Peter Jackson",
    starActors: "Angelina Jolie, Brad Pitt",
    description:
      "A long long agooo there was a Volcanooo who was living underneath the seaaa",
    popularity: "2132",
    popularityDelta: "+5",
  } as MovieInfoType;
};
