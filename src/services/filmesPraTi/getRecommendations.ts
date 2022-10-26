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

export const getRecommendations = (): Array<RecommendationType> => {
  return [
    {
      recName: "Surprise me",
      recList: [
        {
          id: "tt0120338",
          title: "Titanic",
          poster:
            "https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
          minage: "14",
          duration: "2h35min",
          imdbScore: "9.5",
          year: "2002",
          popularity: "101",
          popularityDelta: "-34",
          directors: "Kobe Bryant",
          writers: "Laurentino Gomes",
          starActors: "Lady Gaga, Jim Carry",
          description: "this is a description",
        },
        {
          id: "tt0137523",
          title: "Fight Club",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
          minage: "16",
          duration: "5h35min",
          imdbScore: "9.5",
          year: "2002",
          popularity: "101",
          popularityDelta: "-34",
          directors: "Kobe Bryant",
          writers: "Laurentino Gomes",
          starActors: "Lady Gaga, Jim Carry",
          description: "this is a description",
        },
      ],
    },
  ];
};
