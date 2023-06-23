import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PestDiseasesPage } from './pest-diseases.page';

const routes: Routes = [
  {
    path: '',
    component: PestDiseasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PestDiseasesPageRoutingModule {}
