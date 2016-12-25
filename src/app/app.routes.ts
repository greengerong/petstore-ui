import { Routes } from '@angular/router';
import { HomeComponent } from './home';


export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'home', component: HomeComponent },
];

