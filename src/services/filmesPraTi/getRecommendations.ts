export interface RecommendationType {
  id: string;
  title: string;
  poster: string;
  minage: string;
  duration: string;
}

export const getRecommendations = (): Array<RecommendationType> => {
  return [
    {
      id: "tt3423242432",
      title: "Titanic",
      poster: "https://poster.jpeg",
      minage: "14",
      duration: "2h35min",
    },
  ];
};
