import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/models/movie-detail';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: MovieDetail = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private ms: MovieService
  ) {}

  ngOnInit() {
    this.api
      .getMovieDetails(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe((data) => {
        this.movie = this.ms.parseMovieDetails(data);
        console.log(this.movie);
      });
  }
}
