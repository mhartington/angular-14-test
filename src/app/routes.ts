import {  Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.page';
// Lazy load a single Standalone component
// loadComponent: () => import(./home.page).then(m => M.ComponentClass)
// Lazy load a collection of routes
// loadChildren: () => import(routes).then(m => M.routes)
//

export const routes: Routes = [
  { path: '', component: LandingPage },
  {
    path: 'browse',
    loadComponent:() => import('./pages/browse/browse.page').then(m => m.BrowsePage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then(m => m.SearchPage)
  },
  {
    path: 'album/:id',
    loadComponent: () => import('./pages/album/album.page').then(m => m.AlbumPage)
  },
  {
    path: 'playlist/:id',
    loadComponent: () => import('./pages/playlists/playlists.page').then(m => m.PlaylistsPage)
  }
];
