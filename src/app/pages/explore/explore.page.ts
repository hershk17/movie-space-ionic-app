import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  genres: Genre[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getGenres().subscribe((data: any) => {
      data.array.forEach((genre) => {
        this.genres.push({ id: genre.id, name: genre.name });
      });
      console.log(this.genres);
    });
  }
}
