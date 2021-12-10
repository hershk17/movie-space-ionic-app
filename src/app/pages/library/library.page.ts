import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  movies: any[] = [];

  constructor(private db: DbService, private toast: ToastController) {}

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res) {
        this.db.fetchMovies().subscribe((item) => {
          this.movies = item;
        });
      }
    });
  }

  ionViewWillEnter() {
    this.db.loadMovies();
  }
}
