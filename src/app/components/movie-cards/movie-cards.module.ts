import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MovieCardsComponent } from './movie-cards.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [MovieCardsComponent],
  exports: [MovieCardsComponent],
})
export class MovieCardsModule {}
