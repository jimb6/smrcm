import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandPreperationPage } from './land-preperation.page';

const routes: Routes = [
  {
    path: '',
    component: LandPreperationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandPreperationPageRoutingModule {}
