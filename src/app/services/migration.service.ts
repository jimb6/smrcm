import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatabaseService } from './database.service';
import { SqliteService } from './sqlite.service';

export const createSchemaUsers: string = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY NOT NULL,
  fullName TEXT NOT NULL,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(username));
`;

@Injectable()
export class MigrationService {

  constructor(
    private sqliteService: SqliteService,
    private databaseService: DatabaseService
  ) { }

  async migrate(): Promise<any> {
    await this.createUsersTable();
  }

  async createUsersTable() : Promise<any> {
    await this.databaseService.executeQuery(async(db) => {
      await db.execute(createSchemaUsers)
    })
  }
}
