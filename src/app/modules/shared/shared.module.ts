import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalHeaderComponent} from "../../components/global-header/global-header.component";
import {RouterLink} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [GlobalHeaderComponent],
  imports: [IonicModule, RouterLink, CommonModule],
  exports: [GlobalHeaderComponent]
})
export class SharedModule { }
