import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreGenrePage } from './explore-genre.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreGenrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreGenrePageRoutingModule {}
