import { Injectable } from '@angular/core';
import {SqliteService} from "./sqlite.service";
import {MigrationService} from "./migration.service";
import {SeederService} from "./seeder.service";

@Injectable()
export class InitializeAppService {

  constructor(
    private sqliteService: SqliteService,
    private migrationService: MigrationService,
    private seederService: SeederService
  ) { }

  async initializeApp() {
    await this.sqliteService.initializePlugin().then(async (ret) => {
      try {
        await this.migrationService.migrate();
        await this.seederService.seed();
      } catch (error) {
        throw Error(`initializeAppError: ${error}`);
      }
    })
  }
}
