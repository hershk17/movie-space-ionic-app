import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { ApiService } from 'src/app/services/api.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-explore-genre',
  templateUrl: './explore-genre.page.html',
  styleUrls: ['./explore-genre.page.scss'],
})
export class ExploreGenrePage implements OnInit {
  movies: Movie[] = [];
  constructor(
    private router: ActivatedRoute,
    private api: ApiService,
    private ms: MovieService
  ) {}

  ngOnInit() {
    this.api
      .getMoviesByGenre(Number(this.router.snapshot.paramMap.get('genreID')))
      .subscribe((data: any) => {
        this.movies = this.ms.parseMovies(data.results);
      });
  }

  public getGenreName(): string {
    return this.api.getGenreName(
      Number(this.router.snapshot.paramMap.get('genreID'))
    );
  }
}
