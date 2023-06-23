import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VarietyPage } from './variety.page';

const routes: Routes = [
  {
    path: '',
    component: VarietyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarietyPageRoutingModule {}
