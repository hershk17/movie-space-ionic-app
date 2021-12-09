import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';
import { MovieListModule } from 'src/app/components/movie-list/movie-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    MovieListModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
