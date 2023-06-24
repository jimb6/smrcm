import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {DatabaseService} from "./database.service";
import {SQLiteDBConnection} from "@capacitor-community/sqlite";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private databaseService: DatabaseService
  ) {

  }

  doLogin(username: string, password: string) : Promise<User> {
    return this.databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      var sqlCmd: string = `SELECT * FROM users where username = ? and password = ? limit 1`;
      let values: Array<any> = [username, password];
      let ret: any = await db.query(sqlCmd, values)
      if (ret.values.length > 0)
        return ret.values[0] as User;
      throw Error('Failed to login account.')
    })
  }
}
