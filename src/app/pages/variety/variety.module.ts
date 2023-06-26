import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VarietyPageRoutingModule } from './variety-routing.module';

import { VarietyPage } from './variety.page';
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VarietyPageRoutingModule,
    SharedModule
  ],
  declarations: [VarietyPage]
})
export class VarietyPageModule {}
