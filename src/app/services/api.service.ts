import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/movie';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private key = '33f0b7dbdcaef3a551cf390bfec1c63c';

  private domainURL = 'https://api.themoviedb.org/3/';

  private searchURL = this.domainURL + 'search/movie';
  private detailsURL = this.domainURL + 'movie/';

  private nowPlaying = this.domainURL + 'movie/now_playing';
  private trendingURL = this.domainURL + 'trending/movie/week';
  private topRatedURL = this.domainURL + 'movie/top_rated';
  private upcomingURL = this.domainURL + 'movie/upcoming';
  private popularURL = this.domainURL + 'movie/popular';

  private genresURL = this.domainURL + 'genre/movie/list';
  private genreMoviesURL = this.domainURL + 'discover/movie';

  private queryParam = '&query=';
  private apiParam = '?api_key=';
  private videosParam = '/videos';
  private genresParam = '&with_genres=';
  private languageParam = '&language=en-US';

  constructor(private httpClient: HttpClient) {}

  public getMovies(
    type: string,
    highQualityImages = false,
    query: string = null,
    genre = -1,
    limit = 10
  ): Observable<Movie[]> {
    let completeURL = '';
    // let elem = 1;
    // let maxCnt = limit;

    switch (type) {
      case 'nowPlaying':
        completeURL =
          this.nowPlaying + this.apiParam + this.key + this.languageParam;
        // elem = 2;
        // maxCnt = 5;
        break;
      case 'trending':
        completeURL =
          this.trendingURL + this.apiParam + this.key + this.languageParam;
        break;
      case 'topRated':
        completeURL =
          this.topRatedURL + this.apiParam + this.key + this.languageParam;
        break;
      case 'upcoming':
        completeURL =
          this.upcomingURL + this.apiParam + this.key + this.languageParam;
        // elem = 2;
        break;
      case 'search':
        completeURL =
          this.searchURL +
          this.apiParam +
          this.key +
          this.queryParam +
          query +
          this.languageParam;
        // maxCnt = 20;
        break;
      case 'genre':
        completeURL =
          this.genreMoviesURL +
          this.apiParam +
          this.key +
          this.genresParam +
          genre +
          this.languageParam;
        // maxCnt = 20;
        break;
      case 'popular':
        completeURL =
          this.popularURL + this.apiParam + this.key + this.languageParam;
        // maxCnt = 20;
        break;
      default:
        completeURL =
          this.nowPlaying + this.apiParam + this.key + this.languageParam;
        break;
    }

    try {
      return this.httpClient.get<Movie[]>(completeURL);
    } catch (err) {
      console.log('ERROR: ' + err);
    }
  }
}
