export interface RecommendationType {
  recName: string;
  recList: Array<{
    id: string;
    title: string;
    poster: string;
    minage: string;
    duration: string;
  }>;
}

export const getRecommendations = (): Array<RecommendationType> => {
  return [
    {
      recName: "Surprise me",
      recList: [
        {
          id: "tt3423242432",
          title: "Titanic",
          poster:
            "https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
          minage: "14",
          duration: "2h35min",
        },
        {
          id: "tt342322111",
          title: "Fight Club",
          poster:
            "https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
          minage: "16",
          duration: "5h35min",
        },
      ],
    },
  ];
};
