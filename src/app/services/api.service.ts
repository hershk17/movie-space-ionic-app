import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private key = 'b61c3d7ddbc8f89a944400e21ffea7f0';

  private domainURL = 'https://api.themoviedb.org/3/';

  private searchURL = this.domainURL + 'search/movie';
  private detailsURL = this.domainURL + 'movie/';

  private nowPlaying = this.domainURL + 'movie/now_playing';
  private trendingURL = this.domainURL + 'trending/movie/week';
  private topRatedURL = this.domainURL + 'movie/top_rated';
  private upcomingURL = this.domainURL + 'movie/upcoming';
  private genreMoviesURL = this.domainURL + 'discover/movie';

  private queryParam = '&query=';
  private apiParam = '?api_key=';
  private genresParam = '&with_genres=';
  private languageParam = '&language=en-US';

  private genres: Genre[] = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];

  constructor(private httpClient: HttpClient, private ms: MovieService) {}

  public getNowPlayingMovies(): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.nowPlaying + this.apiParam + this.key + this.languageParam
      );
    } catch (err) {
      console.log('loading now playing movies');
    }
  }

  public getTrendingMovies(): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.trendingURL + this.apiParam + this.key + this.languageParam
      );
    } catch (err) {
      console.log('loading trending movies');
    }
  }

  public getUpcomingMovies(): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.upcomingURL + this.apiParam + this.key + this.languageParam
      );
    } catch (err) {
      console.log('loading upcoming movies');
    }
  }

  public getTopRatedMovies(): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.topRatedURL + this.apiParam + this.key + this.languageParam
      );
    } catch (err) {
      console.log('loading top rated movies');
    }
  }

  public getMovieDetails(id: number): Observable<MovieDetail> {
    try {
      return this.httpClient.get<MovieDetail>(
        this.detailsURL + id + this.apiParam + this.key
      );
    } catch (err) {
      console.log('getting movie details');
    }
  }

  public searchMovies(query: string): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.searchURL +
          this.apiParam +
          this.key +
          this.queryParam +
          query +
          this.languageParam
      );
    } catch (err) {
      console.log('searching');
    }
  }

  public getGenres(): Genre[] {
    return this.genres;
  }

  public getGenreName(id: number): string {
    return this.genres.find((genre) => genre.id === id).name;
  }

  public getMoviesByGenre(id: number): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.genreMoviesURL +
          this.apiParam +
          this.key +
          this.genresParam +
          id +
          this.languageParam
      );
    } catch (err) {
      console.log('getting movies of genre');
    }
  }
}
