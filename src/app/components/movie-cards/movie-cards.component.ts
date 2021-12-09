import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() size: boolean;

  constructor(public router: Router) {}

  ngOnInit() {}
}
