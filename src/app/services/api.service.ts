import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';

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

  // private genresURL = this.domainURL + 'genre/movie/list';
  private genreMoviesURL = this.domainURL + 'discover/movie';

  private queryParam = '&query=';
  private apiParam = '?api_key=';
  // private videosParam = '/videos';
  private genresParam = '&with_genres=';
  private languageParam = '&language=en-US';

  constructor(private httpClient: HttpClient) {}

  public getNowPlayingMovies(): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.nowPlaying + this.apiParam + this.key + this.languageParam
      );
    } catch (err) {
      console.log('ERROR: ' + err);
    }
  }

  public getTrendingMovies(): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.trendingURL + this.apiParam + this.key + this.languageParam
      );
    } catch (err) {
      console.log('ERROR: ' + err);
    }
  }

  public getUpcomingMovies(): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.upcomingURL + this.apiParam + this.key + this.languageParam
      );
    } catch (err) {
      console.log('ERROR: ' + err);
    }
  }

  public getTopRatedMovies(): Observable<Movie[]> {
    try {
      return this.httpClient.get<Movie[]>(
        this.topRatedURL + this.apiParam + this.key + this.languageParam
      );
    } catch (err) {
      console.log('ERROR: ' + err);
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
      console.log('ERROR: ' + err);
    }
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
      console.log('ERROR: ' + err);
    }
  }

  public getMovieDetails(id: number): Observable<MovieDetail> {
    try {
      return this.httpClient.get<MovieDetail>(
        this.detailsURL + id + this.apiParam + this.key
      );
    } catch (err) {
      console.log('ERROR: ' + err);
    }
  }
}
