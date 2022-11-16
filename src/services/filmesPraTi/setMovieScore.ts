export type ScoreType = "like" | "dislike" | "unscored";

export const setMovieScore = async (
  movieId: string,
  score: ScoreType,
  token: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4NzA5MTU5LCJpYXQiOjE2Njg2MzcxNTksImp0aSI6ImY5YWNiN2IzYWI4YjRjZmI4ZmQxYzdjNTlhYWY5NjVlIiwidXNlcl9pZCI6Mn0.1upyzeUMbgv1qLLvXfeu4rp9PXJ14HJMzWDvDdKx7UQ"
) => {
  const reqBody = {
    movieId: movieId,
    score: score,
  };
  const response = await fetch(
    `https://filmes-pra-ti.azurewebsites.net/posts/set_score_movie/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reqBody),
    }
  );
  if (!response.ok) {
    console.error(response);
    throw new Error("Something went wrong when calling api to setMovieScore");
  }
};
