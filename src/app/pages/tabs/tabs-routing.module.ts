import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'home/movie/:id',
        loadChildren: () =>
          import('../movie-details/movie-details.module').then(
            (m) => m.MovieDetailsPageModule
          ),
      },
      {
        path: 'home/search',
        loadChildren: () =>
          import('../search/search.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'home/search/movie/:id',
        loadChildren: () =>
          import('../movie-details/movie-details.module').then(
            (m) => m.MovieDetailsPageModule
          ),
      },
      {
        path: 'explore',
        loadChildren: () =>
          import('../explore/explore.module').then(
            (m) => m.ExplorePageModule
          ),
      },
      {
        path: 'explore/search',
        loadChildren: () =>
          import('../search/search.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'explore/search/movie/:id',
        loadChildren: () =>
          import('../movie-details/movie-details.module').then(
            (m) => m.MovieDetailsPageModule
          ),
      },
      {
        path: 'explore/genre/:genreID',
        loadChildren: () =>
          import('../explore-genre/explore-genre.module').then(
            (m) => m.ExploreGenrePageModule
          ),
      },
      {
        path: 'explore/genre/:genreID/movie/:id',
        loadChildren: () =>
          import('../movie-details/movie-details.module').then(
            (m) => m.MovieDetailsPageModule
          ),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('../library/library.module').then(
            (m) => m.LibraryPageModule
          ),
      },
      {
        path: 'library/movie/:id',
        loadChildren: () =>
          import('../movie-details/movie-details.module').then(
            (m) => m.MovieDetailsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
