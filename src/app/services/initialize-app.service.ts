import { Injectable } from '@angular/core';
import {SqliteService} from "./sqlite.service";
import {MigrationService} from "./migration.service";

@Injectable()
export class InitializeAppService {

  constructor(
    private sqliteService: SqliteService,
    private migrationService: MigrationService
  ) { }

  async initializeApp() {
    await this.sqliteService.initializePlugin().then(async (ret) => {
      try {
        await this.migrationService.migrate();
      } catch (error) {
        throw Error(`initializeAppError: ${error}`);
      }
    })
  }
}
