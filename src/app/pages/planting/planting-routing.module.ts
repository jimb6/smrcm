import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantingPage } from './planting.page';

const routes: Routes = [
  {
    path: '',
    component: PlantingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantingPageRoutingModule {}
