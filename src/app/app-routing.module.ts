import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },
  {
    path: 'pages/home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pages/login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pages/signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'pages/land-preparation',
    loadChildren: () => import('./pages/land-preparation/land-preparation.module').then(m => m.LandPreperationPageModule)
  },
  {
    path: 'pages/fertilizer',
    loadChildren: () => import('./pages/fertilizer/fertilizer.module').then( m => m.FertilizerPageModule)
  },
  {
    path: 'pages/harvest',
    loadChildren: () => import('./pages/harvest/harvest.module').then( m => m.HarvestPageModule)
  },
  {
    path: 'pages/calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'pages/variety',
    loadChildren: () => import('./pages/variety/variety.module').then( m => m.VarietyPageModule)
  },
  {
    path: 'pages/water',
    loadChildren: () => import('./pages/water/water.module').then( m => m.WaterPageModule)
  },
  {
    path: 'pages/pests-diseases',
    loadChildren: () => import('./pages/pest-diseases/pest-diseases.module').then( m => m.PestDiseasesPageModule)
  },
  {
    path: 'pages/harvest-time',
    loadChildren: () => import('./pages/harvest-time/harvest-time.module').then( m => m.HarvestTimePageModule)
  },
  {
    path: 'pages/storage',
    loadChildren: () => import('./pages/storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'pages/about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
