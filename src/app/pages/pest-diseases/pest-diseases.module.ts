import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PestDiseasesPageRoutingModule } from './pest-diseases-routing.module';
import { PestDiseasesPage } from './pest-diseases.page';
import {SharedModule} from "../../modules/shared/shared.module";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PestDiseasesPageRoutingModule,
    SharedModule
  ],
  declarations: [PestDiseasesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PestDiseasesPageModule {}
