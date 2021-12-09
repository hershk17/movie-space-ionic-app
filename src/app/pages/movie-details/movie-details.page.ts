import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/models/movie-detail';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: MovieDetail = null;
  isSaved = false;
  isLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private db: DbService,
    private api: ApiService,
    private ms: MovieService,
    private readonly location: Location,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  convertMinsToHrsMins = (mins: number) => {
    let h = Math.floor(mins / 60);
    let m = Math.round(mins % 60);
    h = h < 10 ? Number('0' + h) : h;
    m = m < 10 ? Number('0' + m) : m;
    return `${h}h${m}m`;
  };

  onBackClick() {
    this.location.back();
  }

  ionViewWillEnter() {
    this.isLoaded = false;
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.db
      .getMovie(id)
      .then((data) => {
        this.isSaved = true;
        this.movie = data;
      })
      .catch((err) => {
        this.isSaved = false;
        this.api.getMovieDetails(id).subscribe((data) => {
          this.movie = this.ms.parseMovieDetails(data);
        });
      })
      .finally(() => {
        this.isLoaded = true;
      });
  }

  public async onAdd() {
    this.db.addMovie(this.movie);
    this.isSaved = true;
  }

  public onRemove() {
    this.db.deleteMovie(this.movie.id);
    this.isSaved = false;
  }

  // public onUpdate(status) {
  //   this.db.deleteMovie(this.movie.id);
  // }
}
