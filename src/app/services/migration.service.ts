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

export const createSchemaContents: string = `
CREATE TABLE IF NOT EXISTS contents (
  id INTEGER PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  highlight TEXT NOT NULL,
  url TEXT NOT NULL,
  fragment TEXT);
`;


@Injectable()
export class MigrationService {

  constructor(
    private sqliteService: SqliteService,
    private databaseService: DatabaseService
  ) { }

  async migrate(): Promise<any> {
    await this.createUsersTable();
    await this.createContentsTable()
  }

  async createUsersTable() : Promise<any> {
    await this.databaseService.executeQuery(async(db) => {
      await db.execute(createSchemaUsers)
    })
  }

  async createContentsTable() : Promise<any> {
    await this.databaseService.executeQuery(async(db) => {
      await db.execute(createSchemaContents)
    })
  }
}
