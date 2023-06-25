import {Injectable} from '@angular/core';
import {SqliteService} from "./sqlite.service";
import {DatabaseService} from "./database.service";
import {Content} from "../models/Content";
import contentsData from "../repositories/contents/content.data";
import {ContentRepository} from "../repositories/contents/content.repository";
import {UserRepository} from "../repositories/users/user.repository";
import {User} from "../models/User";
import {createSchemaUsers} from "./migration.service";
import contentData from "../repositories/contents/content.data";
import ContentData from "../repositories/contents/content.data";


export const seedContents: string = `
INSERT INTO contents (id, title, subtitle, highlight, url, fragment)
VALUES
   (1, 'Pag-andam sa Uma', 'Land preparation',  'Land preparation', '/pages/land-preparation', ''),
   (2, 'Patag nga basakan' ,'Land preparation', 'Ang maayo pagkapatag nga basakan gikinahanglan alang sa maayong pagtubo sa tanum ug pagdumala niini. Makatabang kini sa mga musnod', '/pages/land-preparation', 'patag'),
   (3, 'Assessment of Key Check' , 'Walay taas o ubos nga parte human sa katapusang pagpatag:', 'Walay bahin nga mas lalom pa sa 5 sentimetro(sm) nga tubig (usa ka kumagko sa kamot)\\n' +
      'gamay ra ang sagbot\\n' +
      'sayon nga pagduamala sa mga kohol\\n' +
      'episyente nga paggamit sa nutrina\\n' +
      'pareho o dungan ang pagtubo ug pagkagulang sa tanum\\n' +
      'episytente nga paggamit sa makinarya sa pagpanguma', '/pages/land-preparation', 'assessment');`;
@Injectable()
export class SeederService {

  constructor(
    private _databaseService: DatabaseService,
    private userRepository: UserRepository,
    private contentRepository: ContentRepository
  ) {
  }

  async seed(): Promise<any> {
    await this.seedUsersTable();
    await this.seedContentsTable();
  }

  async seedUsersTable(): Promise<any> {
    await this.userRepository.get(1).catch(async _ => {
      await this._databaseService.executeQuery(async (db) => {
        let sqlCmd: string = "INSERT INTO users (id, fullName, username, password) VALUES (1, 'Test Data', 'test', 'tests')";
        await db.execute(sqlCmd)
        return;
      })
    })
  }

  async seedContentsTable(): Promise<any> {
    await this.contentRepository.get(1).catch(async _ => {
      await this._databaseService.executeQuery(async (db) => {
        await db.execute(seedContents)
        return;
      })
    })
  }
}
