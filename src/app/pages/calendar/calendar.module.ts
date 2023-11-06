import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CalendarPageRoutingModule} from './calendar-routing.module';
import {CalendarPage} from './calendar.page';
import {SharedModule} from "../../modules/shared/shared.module";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    SharedModule
  ],
  declarations: [CalendarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarPageModule {
}
