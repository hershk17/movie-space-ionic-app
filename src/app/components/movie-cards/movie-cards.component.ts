import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent implements OnInit {
  @Input() movies: Movie[];

  constructor() { }

  ngOnInit() {}

}
