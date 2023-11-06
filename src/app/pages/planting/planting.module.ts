import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantingPageRoutingModule } from './planting-routing.module';

import { PlantingPage } from './planting.page';
import {SharedModule} from "../../modules/shared/shared.module";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PlantingPageRoutingModule,
        SharedModule
    ],
  declarations: [PlantingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlantingPageModule {}
