import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandPreperationPageRoutingModule } from './land-preparation-routing.module';

import { LandPreparationPage } from './land-preparation.page';
import {SharedModule} from "../../modules/shared/shared.module";
import {GlobalHeaderComponent} from "../../components/global-header/global-header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandPreperationPageRoutingModule,
    SharedModule
  ],
  declarations: [LandPreparationPage]
})
export class LandPreperationPageModule {}
