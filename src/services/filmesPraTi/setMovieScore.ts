export type ScoreType = "like" | "dislike" | "unscored";

export const setMovieScore = async (movieId: string, score: ScoreType) => {
  const reqBody = {
    id: movieId,
    score: score,
  };
  const response = await fetch(
    `https://filmesprati.com.br/movies/${movieId}/score`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  );
  if (!response.ok) {
    console.error(response);
    throw new Error("Something went wrong when calling api to setMovieScore");
  }
};
