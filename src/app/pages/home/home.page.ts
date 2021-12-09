import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

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
    this.api.getNowPlayingMovies().subscribe((data: any) => {
      this.nowPlayingMovies = this.ms.parseMovies(data.results);
    });
    this.api.getTrendingMovies().subscribe((data: any) => {
      this.trendingMovies = this.ms.parseMovies(data.results);
    });
    this.api.getTopRatedMovies().subscribe((data: any) => {
      this.topRatedMovies = this.ms.parseMovies(data.results);
    });
    this.api.getUpcomingMovies().subscribe((data: any) => {
      this.upcomingMovies = this.ms.parseMovies(data.results);
    });
  }
}
