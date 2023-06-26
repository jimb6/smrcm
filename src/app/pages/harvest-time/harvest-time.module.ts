import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarvestTimePageRoutingModule } from './harvest-time-routing.module';

import { HarvestTimePage } from './harvest-time.page';
import {GlobalHeaderComponent} from "../../components/global-header/global-header.component";
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarvestTimePageRoutingModule,
    SharedModule
  ],
  declarations: [HarvestTimePage]
})
export class HarvestTimePageModule {}
