import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LibraryPageRoutingModule } from './library-routing.module';
import { LibraryPage } from './library.page';
import { MovieListModule } from 'src/app/components/movie-list/movie-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule,
    MovieListModule,
  ],
  declarations: [LibraryPage],
})
export class LibraryPageModule {}
