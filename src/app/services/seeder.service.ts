import { Injectable } from '@angular/core';
import {SqliteService} from "./sqlite.service";
import {DatabaseService} from "./database.service";
import {Content} from "../models/Content";
import contentsData from "../repositories/contents/content.data";
import {ContentRepository} from "../repositories/contents/content.repository";
import {UserRepository} from "../repositories/users/user.repository";
import {User} from "../models/User";


export const seedSchemaContents: string = `
CREATE TABLE IF NOT EXISTS contents (
  id INTEGER PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  highlight TEXT NOT NULL,
  url TEXT NOT NULL);
`;


@Injectable({
  providedIn: 'root'
})
export class SeederService {

  constructor(
    private sqliteService: SqliteService,
    private databaseService: DatabaseService,
    private contentRepository: ContentRepository,
    private userRepository: UserRepository
  ) { }

  async seed(): Promise<any> {
    await this.seedUsersTable();
    await this.seedContentsTable();
  }

  async seedUsersTable() : Promise<any> {
    await this.userRepository.create({id: 1, fullName: 'Default User', username: 'test', password: 'tests'} as User)
  }

  async seedContentsTable() : Promise<any> {
    var contents: Content[] = contentsData;
    for (let content of contents){
      await this.contentRepository.create(content);
    }
  }
}
