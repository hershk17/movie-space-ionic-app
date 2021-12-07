import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Movie } from 'src/app/shared/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nowPlayingMovies: Movie[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {}

  public async getNowPlayingMovies() {
    this.api.getMovies('nowPlaying').subscribe((data) => {
      this.nowPlayingMovies = data;
    });
  }
}
