import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreGenrePageRoutingModule } from './explore-genre-routing.module';

import { ExploreGenrePage } from './explore-genre.page';
import { MovieListModule } from 'src/app/components/movie-list/movie-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreGenrePageRoutingModule,
    MovieListModule
  ],
  declarations: [ExploreGenrePage]
})
export class ExploreGenrePageModule {}
