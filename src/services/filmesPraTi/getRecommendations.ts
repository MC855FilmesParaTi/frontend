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

export const getRecommendations = async (
  token: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4NzA5MTU5LCJpYXQiOjE2Njg2MzcxNTksImp0aSI6ImY5YWNiN2IzYWI4YjRjZmI4ZmQxYzdjNTlhYWY5NjVlIiwidXNlcl9pZCI6Mn0.1upyzeUMbgv1qLLvXfeu4rp9PXJ14HJMzWDvDdKx7UQ"
): Promise<Array<RecommendationType>> => {
  const response = await fetch(
    "https://filmes-pra-ti.azurewebsites.net/posts/recommendations/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json() as unknown as Array<RecommendationType>;
};
