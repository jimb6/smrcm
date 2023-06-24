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
import {UserRepository} from "./repositories/user.repository";
import {UserDefaultQueryRepository} from "./repositories/user.default.query.repository";

export function initializeFactory(init: InitializeAppService) {
  return () => init.initializeApp();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    SqliteService,
    DatabaseService,
    InitializeAppService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeAppService],
      multi: true,
    },
    MigrationService,
    UserRepository,
    UserDefaultQueryRepository,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
