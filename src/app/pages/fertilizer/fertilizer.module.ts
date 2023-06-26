import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FertilizerPageRoutingModule} from './fertilizer-routing.module';

import {FertilizerPage} from './fertilizer.page';
import {GlobalHeaderComponent} from "../../components/global-header/global-header.component";
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizerPageRoutingModule,
    SharedModule
  ],
  declarations: [FertilizerPage]
})
export class FertilizerPageModule {
}
