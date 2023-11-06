import {Injectable} from "@angular/core";
import {DatabaseService} from "../../services/database.service";
import {DBSQLiteValues, SQLiteDBConnection} from "@capacitor-community/sqlite";
import {Content} from "../../models/Content";
@Injectable()
export class ContentRepository {

  constructor(private _databaseService: DatabaseService) {
  }

  async getList(): Promise<Content[]> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      var contents: DBSQLiteValues = await db.query("SELECT * FROM contents");
      return contents.values as Content[];
    })
  }

  async create(content: Content) : Promise<Content> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      let sqlCmd: string = "INSERT INTO contents (title, subtitle, highlight, url, fragment) values (?, ?, ?, ?, ?)";
      let values: Array<any> = [content.title, content.subtitle, content.highlight, content.url, content.fragment];
      let ret: any = await db.run(sqlCmd, values);
      if (ret.changes.lastId > 0) {
        return ret.changes as Content;
      }
      throw Error('Create Content Failed!');
    });
  }

  async get(id: number): Promise<Content> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      var sqlCmd: string = `SELECT * FROM contents where id = ? limit 1`;
      let values: Array<any> = [id];
      let ret: any = await db.query(sqlCmd, values)
      if (ret.values.length > 0)
        return ret.values[0] as Content;
      throw Error('Get Content Failed!')
    })
  }

  async update(content: Content) {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      let sqlCmd: string = "UPDATE contents set title = ?, subtitle = ?, highlight = ?, url = ?, fragment = ?";
      let values: Array<any> = [content.title, content.subtitle, content.highlight, content.url, content.fragment];
      let ret: any = await db.query(sqlCmd, values);
      if (ret.changes.changes > 0)
        return await this.get(content.id);
      throw Error('Update content failed.')
    });
  }

  async delete(id: number) : Promise<void> {
    await this._databaseService.executeQuery(async (db: SQLiteDBConnection) => {
        await db.query(`DELETE FROM contents where id = ${id}`)
    });
  }

}
