import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HarvestPageRoutingModule} from './harvest-routing.module';

import {HarvestPage} from './harvest.page';
import {SharedModule} from "../../modules/shared/shared.module";
import {GlobalHeaderComponent} from "../../components/global-header/global-header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarvestPageRoutingModule,
    SharedModule
  ],
  declarations: [HarvestPage]
})
export class HarvestPageModule {
}
