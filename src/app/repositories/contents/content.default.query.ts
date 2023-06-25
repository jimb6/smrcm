import {Injectable} from "@angular/core";
import {SqliteService} from "../../services/sqlite.service";
import {Content} from "../../models/Content";
import {environment} from "../../../environments/environment";
import {DBSQLiteValues, SQLiteDBConnection} from "@capacitor-community/sqlite";
import {DatabaseService} from "../../services/database.service";


@Injectable()
export class ContentDefaultQueryRepository {
  constructor(private _databaseService: DatabaseService) {
  }
  async searchContent(filter: string): Promise<Content[]> {
    // Open Connection
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      var contents: DBSQLiteValues = await db.query(`SELECT * FROM contents WHERE title LIKE '%${filter}%' OR subtitle LIKE '%${filter}%' OR highlight LIKE '%${filter}%' OR url LIKE '%${filter}%'`);
      if (contents.values.length > 0)
        return contents.values as Content[];
      throw Error('No Content Available')
    })
  }


}
