import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SqliteService} from "./services/sqlite.service";
import {DatabaseService} from "./services/database.service";
import {InitializeAppService} from "./services/initialize-app.service";
import {MigrationService} from "./services/migration.service";
import {UserRepository} from "./repositories/users/user.repository";
import {UserDefaultQueryRepository} from "./repositories/users/user.default.query.repository";
import {ContentRepository} from "./repositories/contents/content.repository";
import {ContentDefaultQueryRepository} from "./repositories/contents/content.default.query";
import {SeederService} from "./services/seeder.service";
import {DetailService} from "./services/detail.service";
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

export function initializeFactory(init: InitializeAppService) {
  return async () => await init.initializeApp();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    SqliteService,
    DetailService,
    DatabaseService,
    InitializeAppService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeAppService],
      multi: true,
    },
    MigrationService,
    SeederService,
    UserRepository,
    UserDefaultQueryRepository,
    ContentRepository,
    ContentDefaultQueryRepository,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() {
  }
}
