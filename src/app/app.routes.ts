import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadComponent: () => import('./pages/main-page/main-page.component').then(c => c.MainPageComponent)
  },
  {
    path: 'hotels/:hotelTitle',
    loadComponent: () => import('./pages/about-hotel-page/about-hotel-page.component').then(c => c.AboutHotelPageComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found-page/not-found-page.component').then(c => c.NotFoundPageComponent)
  }
];
