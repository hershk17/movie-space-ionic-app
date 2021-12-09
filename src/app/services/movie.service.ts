import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  public parseMovies(res: any): Movie[] {
    const movies: Movie[] = [];
    res.forEach((movie: any) => {
      movies.push({
        posterURL: movie.poster_path,
        adult: movie.adult,
        overview: movie.overview,
        releaseDate: movie.release_date,
        genres: movie.genre_ids,
        id: movie.id,
        title: movie.title,
        language: movie.original_language,
        backdropURL: movie.backdrop_path,
        popularity: movie.popularity,
        voteCnt: movie.vote_count,
        video: movie.video,
        voteAvg: movie.vote_average,
        userWatchStatus: '',
        userRating: -1,
      });
    });
    return movies;
  }
}
