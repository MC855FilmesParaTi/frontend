export type ScoreType = "like" | "dislike" | "unscored";

export const setMovieScore = async (movieId: string, score: ScoreType) => {
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
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify(reqBody),
    }
  );
  if (!response.ok) {
    console.error(response);
    throw new Error("Something went wrong when calling api to setMovieScore");
  }
};
