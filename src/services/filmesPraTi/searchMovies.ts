export interface SearchResultType {
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

export const searchMovies = async (
  q: string
): Promise<Array<SearchResultType>> => {
  const response = await fetch(
    "https://filmes-pra-ti.azurewebsites.net/posts/search/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify({ keySearch: q }),
      signal: AbortSignal.timeout(10000),
    }
  );
  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("Auth error");
    }
    throw new Error("Problema ao chamar api");
  }

  return response.json() as unknown as Array<SearchResultType>;
};
