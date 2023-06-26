import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import {GlobalHeaderComponent} from "../../components/global-header/global-header.component";
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    SharedModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
