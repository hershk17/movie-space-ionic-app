import { Genre } from './genre';
import { Movie } from './movie';

export interface MovieDetail extends Movie {
  backdropURL: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  language: string;
  revenue: number;
  runtime: number;
}
