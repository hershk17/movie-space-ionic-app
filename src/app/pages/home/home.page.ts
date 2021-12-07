import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/shared/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nowPlayingMovies: Movie[] = [];
  trendingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  constructor(private api: ApiService, private ms: MovieService) {}

  ngOnInit() {
    this.getNowPlayingMovies();
    this.getTrendingMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
  }

  public getNowPlayingMovies() {
    this.api.getMovies('nowPlaying').subscribe((data: any) => {
      this.nowPlayingMovies = this.ms.parseMovies(data.results);
      return this.nowPlayingMovies;
    });
  }

  public getTrendingMovies() {
    this.api.getMovies('trending').subscribe((data: any) => {
      this.trendingMovies = this.ms.parseMovies(data.results);
      return this.trendingMovies;
    });
  }

  public getTopRatedMovies() {
    this.api.getMovies('topRated').subscribe((data: any) => {
      this.topRatedMovies = this.ms.parseMovies(data.results);
      return this.topRatedMovies;
    });
  }

  public getUpcomingMovies() {
    this.api.getMovies('upcoming').subscribe((data: any) => {
      this.upcomingMovies = this.ms.parseMovies(data.results);
      return this.upcomingMovies;
    });
  }
}
