import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(public toastController: ToastController) {}

  async presentToast(msg: string, c: string = 'dark') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: c,
      position: 'top',
      cssClass: 'header-top',
    });
    toast.present();
  }

  public parseMovies(res: any): Movie[] {
    const movies: Movie[] = [];
    res.forEach((movie: any) => {
      movies.push({
        id: movie.id,
        title: movie.title,
        posterURL: movie.poster_path,
        overview: movie.overview,
        releaseDate: movie.release_date,
        voteAvg: movie.vote_average,
        voteCnt: movie.vote_count,
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
      backdropURL: data.backdrop_path,
      budget: data.budget,
      genres: data.genres,
      homepage: data.homepage,
      language: data.original_language,
      releaseDate: data.release_date,
      revenue: data.revenue,
      runtime: data.runtime,
      voteAvg: data.vote_average,
      voteCnt: data.vote_count,
    };
  }
}
