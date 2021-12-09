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
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'explore',
        loadChildren: () =>
          import('../pages/explore/explore.module').then(
            (m) => m.ExplorePageModule
          ),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('../pages/library/library.module').then(
            (m) => m.LibraryPageModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../pages/search/search.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'movie/:id',
        loadChildren: () =>
          import('../pages/movie-details/movie-details.module').then(
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
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
