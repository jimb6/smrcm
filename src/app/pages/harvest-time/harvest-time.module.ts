import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarvestTimePageRoutingModule } from './harvest-time-routing.module';

import { HarvestTimePage } from './harvest-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarvestTimePageRoutingModule
  ],
  declarations: [HarvestTimePage]
})
export class HarvestTimePageModule {}
