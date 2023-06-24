import {environment} from 'src/environments/environment';
import {Injectable} from "@angular/core";
import {SqliteService} from "../../services/sqlite.service";
import {User} from "../../models/User";
import {DBSQLiteValues} from "@capacitor-community/sqlite";

@Injectable()
export class UserDefaultQueryRepository {
  constructor(private sqliteDataService: SqliteService) {
  }

  async getProducts(): Promise<User[]> {
    // Open Connection
    const db = await this.sqliteDataService.createConnection(environment.databaseName, false, "no-encryption", environment.databaseVersion);
    await db.open();

    // Queries
    var users: DBSQLiteValues = await db.query("SELECT * FROM USERS");

    // Close Connection
    await this.sqliteDataService.closeConnection(environment.databaseName);

    return users.values as User[]
  }

}
