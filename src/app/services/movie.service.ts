import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  public parseMovies(res: any): Movie[] {
    const movies: Movie[] = [];
    res.forEach((movie: any) => {
      movies.push({
        id: movie.id,
        title: movie.title,
        posterURL: movie.poster_path,
        overview: movie.overview,
      });
    });
    return movies;
  }

  public parseMovieDetails(data: any): MovieDetail {
    return {
      id: data.id,
      title: data.title,
      posterURL: data.poster_path,
      overview: data.overview,
      adult: data.adult,
      backdropURL: data.backdrop_path,
      genres: data.genres,
      homepage: data.homepage,
      language: data.original_language,
      popularity: data.popularity,
      releaseDate: data.release_date,
      revenue: data.revenue,
      runtime: data.runtime,
      tagline: data.tagline,
      video: data.video,
      voteAvg: data.vote_average,
      voteCnt: data.vote_count,
      userWatchStatus: '',
      userRating: -1,
    };
  }
}
