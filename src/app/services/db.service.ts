import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

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
          name: 'movies_db.db',
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchMovies(): Observable<Movie[]> {
    return this.moviesList.asObservable();
  }

  public getFakeData() {
    this.httpClient
      .get('assets/dump.sql', { responseType: 'text' })
      .subscribe((data) => {
        this.sqlPorter
          .importSqlToDb(this.storage, data)
          .then((_) => {
            this.getMovies();
            this.isDbReady.next(true);
          })
          .catch((error) => console.error(error));
      });
  }

  public async getMovies() {
    const res = await this.storage.executeSql('SELECT * FROM moviesTable', []);
    const movies: Movie[] = [];
    if (res.rows.length > 0) {
      for (let i = 0; i < res.rows.length; i++) {
        movies.push({
          id: res.rows.item(i).id,
          posterURL: res.rows.item(i).posterURL,
          adult: res.rows.item(i).adult,
          overview: res.rows.item(i).overview,
          releaseDate: res.rows.item(i).releaseDate,
          genres: res.rows.item(i).genres,
          title: res.rows.item(i).title,
          language: res.rows.item(i).lang,
          backdropURL: res.rows.item(i).backdropURL,
          popularity: res.rows.item(i).popularity,
          voteCnt: res.rows.item(i).voteCnt,
          video: res.rows.item(i).video,
          voteAvg: res.rows.item(i).voteAvg,
          userWatchStatus: res.rows.item(i).userWatchStatus,
          userRating: res.rows.item(i).userRating,
        });
      }
    }
    this.moviesList.next(movies);
  }

  public async addMovie(movie: Movie) {
    const res = await this.storage.executeSql(
      'INSERT INTO moviesTable (artist_name, song_name) VALUES (?, ?)',
      Object.values(movie)
    );
    this.getMovies();
  }

  public async getMovie(id: number): Promise<Movie> {
    return this.storage
      .executeSql('SELECT * FROM moviesTable WHERE id = ?', [id])
      .then((res) => ({
        id: res.rows.item(0).id,
        posterURL: res.rows.item(0).posterURL,
        adult: res.rows.item(0).adult,
        overview: res.rows.item(0).overview,
        releaseDate: res.rows.item(0).releaseDate,
        genres: res.rows.item(0).genres,
        title: res.rows.item(0).title,
        language: res.rows.item(0).lang,
        backdropURL: res.rows.item(0).backdropURL,
        popularity: res.rows.item(0).popularity,
        voteCnt: res.rows.item(0).voteCnt,
        video: res.rows.item(0).video,
        voteAvg: res.rows.item(0).voteAvg,
        userWatchStatus: res.rows.item(0).userWatchStatus,
        userRating: res.rows.item(0).userRating,
      }));
  }

  public async updateMovie(id: number, movie: Movie) {
    await this.storage.executeSql(
      `UPDATE moviesTable SET artist_name = ?, song_name = ? WHERE id = ${id}`,
      Object.values(movie)
    );
    this.getMovies();
  }

  public async deleteMovie(id: number) {
    const _ = await this.storage.executeSql(
      'DELETE FROM moviesTable WHERE id = ?',
      [id]
    );
    this.getMovies();
  }
}
