import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'movies-list',
    children: [
      {
        path: '',
        loadChildren: './movies-list/movies-list.module#MoviesListPageModule'
      },
      {
        path: ':movieName',
        loadChildren: './movie/movie.module#MoviePageModule'
      }
    ]
  },
  {
    path: 'add-form', loadChildren: './add-form/add-form.module#AddFormPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
