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

export const getMovieInfo = async (
  movieId: string,
  token: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4NzA5MTU5LCJpYXQiOjE2Njg2MzcxNTksImp0aSI6ImY5YWNiN2IzYWI4YjRjZmI4ZmQxYzdjNTlhYWY5NjVlIiwidXNlcl9pZCI6Mn0.1upyzeUMbgv1qLLvXfeu4rp9PXJ14HJMzWDvDdKx7UQ"
) => {
  const response = await fetch(
    `https://filmes-pra-ti.azurewebsites.net/posts/movie_details/?${new URLSearchParams(
      [["movieId", movieId]]
    ).toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json() as unknown as MovieInfoType;

  // return {
  //   id: "tt0120338",
  //   title: "Titanic",
  //   poster:
  //     "https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
  //   minage: "14",
  //   duration: "2h35min",
  //   year: "2002",
  //   imdbScore: "9.8",
  //   directors: "Tarantino, Peter Jackson",
  //   writers: "Tarantino, Peter Jackson",
  //   starActors: "Angelina Jolie, Brad Pitt",
  //   description:
  //     "A long long agooo there was a Volcanooo who was living underneath the seaaa",
  //   popularity: "2132",
  //   popularityDelta: "+5",
  // } as MovieInfoType;
};
