import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Movie } from 'src/app/models/movie';
import { ApiService } from 'src/app/services/api.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchbar') searchbar: IonSearchbar;
  movies: Movie[] = [];

  constructor(private api: ApiService, private ms: MovieService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.searchbar?.setFocus();
  }

  public searchMovies(query: string) {
    this.api.searchMovies(query).subscribe((data: any) => {
      this.movies = this.ms.parseMovies(data.results);
    });
  }
}
