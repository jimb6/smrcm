import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandPreparationPage } from './land-preparation.page';

const routes: Routes = [
  {
    path: '',
    component: LandPreparationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandPreperationPageRoutingModule {}
