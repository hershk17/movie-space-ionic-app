import { Genre } from './genre';
import { Movie } from './movie';

export interface MovieDetail extends Movie {
  adult: boolean;
  backdropURL: string;
  genres: Genre[];
  homepage: string;
  language: string;
  popularity: number;
  releaseDate: string;
  revenue: number;
  runtime: number;
  tagline: string;
  video: boolean;
  voteAvg: number;
  voteCnt: number;
  userWatchStatus: string;
  userRating: number;
}
