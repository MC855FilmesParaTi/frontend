export type ScoreType = "like" | "dislike" | "unscore";

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
      signal: AbortSignal.timeout(10000),
    }
  );
  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("Auth error");
    }
    throw new Error("Problema ao chamar api");
  }
};
