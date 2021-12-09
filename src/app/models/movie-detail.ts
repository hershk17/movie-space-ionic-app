import { Genre } from './genre';
import { Movie } from './movie';

export interface MovieDetail extends Movie {
  backdropURL: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  language: string;
  releaseDate: string;
  revenue: number;
  runtime: number;
  voteAvg: number;
  voteCnt: number;
}
