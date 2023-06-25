import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandPreperationPageRoutingModule } from './land-preparation-routing.module';

import { LandPreparationPage } from './land-preparation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandPreperationPageRoutingModule
  ],
  declarations: [LandPreparationPage]
})
export class LandPreperationPageModule {}
