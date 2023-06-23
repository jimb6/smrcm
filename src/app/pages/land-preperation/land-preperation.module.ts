import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandPreperationPageRoutingModule } from './land-preperation-routing.module';

import { LandPreperationPage } from './land-preperation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandPreperationPageRoutingModule
  ],
  declarations: [LandPreperationPage]
})
export class LandPreperationPageModule {}
