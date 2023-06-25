import {Injectable} from "@angular/core";
import {SqliteService} from "../../services/sqlite.service";
import {Content} from "../../models/Content";
import {environment} from "../../../environments/environment";
import {DBSQLiteValues} from "@capacitor-community/sqlite";


@Injectable()
export class ContentDefaultQueryRepository {
  constructor(private sqliteDataService: SqliteService) {
  }
  async searchContent(filter: string): Promise<Content[]> {
    // Open Connection
    const db = await this.sqliteDataService.createConnection(environment.databaseName, false, "no-encryption", environment.databaseVersion);
    await db.open();

    // Queries
    var users: DBSQLiteValues = await db.query(`SELECT * FROM contents WHERE title LIKE '%${filter}%'
                                                            OR subtitle LIKE '%${filter}%' OR highlight LIKE '%${filter}%' OR url LIKE '%${filter}%'`);
    // Close Connection
    await this.sqliteDataService.closeConnection(environment.databaseName);

    return users.values as Content[]
  }


}
