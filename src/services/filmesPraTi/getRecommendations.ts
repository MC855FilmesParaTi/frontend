export interface RecommendationType {
  recName: string;
  recList: Array<{
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
  }>;
}

export const getRecommendations = async (): Promise<
  Array<RecommendationType>
> => {
  const response = await fetch(
    "https://filmes-pra-ti.azurewebsites.net/posts/recommendations/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("Auth error");
    }
    throw new Error("Problema ao chamar api");
  }

  return response.json() as unknown as Array<RecommendationType>;
};
