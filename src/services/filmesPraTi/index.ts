import { MovieInfoType } from "./getMovieInfo";
import { RecommendationType } from "./getRecommendations";
import { ScoreType } from "./setMovieScore";
export type MovieInfo = MovieInfoType;
export type Recommendation = RecommendationType;
export type Score = ScoreType;
export { getMovieInfo } from "./getMovieInfo";
export { getRecommendations } from "./getRecommendations";
export { setMovieScore } from "./setMovieScore";
