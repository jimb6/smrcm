import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoragePageRoutingModule } from './storage-routing.module';

import { StoragePage } from './storage.page';
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoragePageRoutingModule,
    SharedModule
  ],
  declarations: [StoragePage]
})
export class StoragePageModule {}
