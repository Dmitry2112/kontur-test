import { Routes } from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: MainPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
