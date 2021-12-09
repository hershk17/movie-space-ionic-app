import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { MovieDetail } from '../models/movie-detail';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private storage: SQLiteObject;
  private moviesList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter
  ) {
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: 'movies.db',
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.httpClient
            .get('assets/dump.sql', { responseType: 'text' })
            .subscribe((data) => {
              this.sqlPorter
                .importSqlToDb(this.storage, data)
                .then((_) => {
                  this.loadMovies();
                  this.isDbReady.next(true);
                })
                .catch((error) => console.error(error));
            });
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchMovies(): Observable<MovieDetail[]> {
    return this.moviesList.asObservable();
  }

  public async loadMovies() {
    const res = await this.storage.executeSql('SELECT * FROM moviesTable', []);
    const movies: MovieDetail[] = [];
    if (res.rows.length > 0) {
      for (let i = 0; i < res.rows.length; i++) {
        movies.push({
          id: res.rows.item(i).id,
          title: res.rows.item(i).title,
          posterURL: res.rows.item(i).posterURL,
          overview: res.rows.item(i).overview,
          adult: res.rows.item(i).adult,
          backdropURL: res.rows.item(i).backdropURL,
          genres: res.rows.item(i).genres,
          homepage: res.rows.item(i).homepage,
          language: res.rows.item(i).lang,
          popularity: res.rows.item(i).popularity,
          releaseDate: res.rows.item(i).releaseDate,
          revenue: res.rows.item(i).revenue,
          runtime: res.rows.item(i).runtime,
          tagline: res.rows.item(i).tagline,
          video: res.rows.item(i).video,
          voteAvg: res.rows.item(i).voteAvg,
          voteCnt: res.rows.item(i).voteCnt,
          userWatchStatus: res.rows.item(i).userWatchStatus,
          userRating: res.rows.item(i).userRating,
        });
      }
    }
    this.moviesList.next(movies);
  }

  public async addMovie(movie: MovieDetail) {
    const data = [
      movie.id,
      movie.title,
      movie.posterURL,
      movie.overview,
      movie.adult,
      movie.backdropURL,
      JSON.stringify(movie.genres),
      movie.homepage,
      movie.language,
      movie.popularity,
      movie.releaseDate,
      movie.revenue,
      movie.runtime,
      movie.tagline,
      movie.video,
      movie.voteAvg,
      movie.voteCnt,
      movie.userWatchStatus,
      movie.userRating,
    ];
    const res = await this.storage.executeSql(
      'INSERT INTO moviesTable VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      data
    );
    this.loadMovies();
  }

  public async getMovie(id: number): Promise<MovieDetail> {
    return this.storage
      .executeSql('SELECT * FROM moviesTable WHERE id = ?', [id])
      .then((res) => ({
        id: res.rows.item(0).id,
        title: res.rows.item(0).title,
        posterURL: res.rows.item(0).posterURL,
        overview: res.rows.item(0).overview,
        adult: res.rows.item(0).adult,
        backdropURL: res.rows.item(0).backdropURL,
        genres: JSON.parse(res.rows.item(0).genres),
        homepage: res.rows.item(0).homepage,
        language: res.rows.item(0).lang,
        popularity: res.rows.item(0).popularity,
        releaseDate: res.rows.item(0).releaseDate,
        revenue: res.rows.item(0).revenue,
        runtime: res.rows.item(0).runtime,
        tagline: res.rows.item(0).tagline,
        video: res.rows.item(0).video,
        voteAvg: res.rows.item(0).voteAvg,
        voteCnt: res.rows.item(0).voteCnt,
        userWatchStatus: res.rows.item(0).userWatchStatus,
        userRating: res.rows.item(0).userRating,
      }));
  }

  public async updateMovie(id: number, movie: MovieDetail) {
    // await this.storage.executeSql(
    //   `UPDATE moviesTable SET artist_name = ?, song_name = ? WHERE id = ${id}`,
    //   Object.values(movie)
    // );
    this.loadMovies();
  }

  public async deleteMovie(id: number) {
    const _ = await this.storage.executeSql(
      'DELETE FROM moviesTable WHERE id = ?',
      [id]
    );
    this.loadMovies();
  }
}
