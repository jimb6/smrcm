import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CalendarPageRoutingModule} from './calendar-routing.module';

import {CalendarPage} from './calendar.page';
import {GlobalHeaderComponent} from "../../components/global-header/global-header.component";
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    SharedModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {
}
