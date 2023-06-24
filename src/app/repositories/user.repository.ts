import {Injectable} from "@angular/core";
import {DatabaseService} from "../services/database.service";
import {User} from "../models/User";
import {DBSQLiteValues, SQLiteDBConnection} from "@capacitor-community/sqlite";


@Injectable()
export class UserRepository {

  constructor(private _databaseService: DatabaseService) {
  }

  async getList(): Promise<User[]> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      var users: DBSQLiteValues = await db.query("SELECT * FROM users");
      return users.values as User[];
    })
  }

  async create(user: User) {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      let sqlCmd: string = "INSERT INTO users (fullName, username, password) values (?, ?, ?)";
      let values: Array<any> = [user.fullName, user.username, user.password];
      let ret: any = await db.run(sqlCmd, values);
      if (ret.changes.lastId > 0) {
        return ret.changes as User;
      }
      throw Error('Create User Failed!');
    });
  }

  async get(id: number): Promise<User> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      var sqlCmd: string = `SELECT * FROM users where id = ? limit 1`;
      let values: Array<any> = [id];
      let ret: any = await db.query(sqlCmd, values)
      if (ret.values.length > 0)
        return ret.values[0] as User;
      throw Error('Get User Failed!')
    })
  }

  async update(user: User) {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      let sqlCmd: string = "UPDATE users set fullName = ?, username = ?, password = ?";
      let values: Array<any> = [user.fullName, user.username, user.password];
      let ret: any = await db.query(sqlCmd, values);
      if (ret.changes.changes > 0)
        return await this.get(user.id);
      throw Error('F')
    });
  }

  async delete(id: number) : Promise<void> {
    await this._databaseService.executeQuery(async (db: SQLiteDBConnection) => {
        await db.query(`DELETE FROM users where id = ${id}`)
    });
  }

}
