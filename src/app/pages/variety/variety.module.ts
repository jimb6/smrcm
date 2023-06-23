import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VarietyPageRoutingModule } from './variety-routing.module';

import { VarietyPage } from './variety.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VarietyPageRoutingModule
  ],
  declarations: [VarietyPage]
})
export class VarietyPageModule {}
