import { Component, OnInit } from '@angular/core';
import {SqliteService} from "../../services/sqlite.service";
import { createSchema, twoUsers } from '../../utils/no-encryption-utils';
// import { deleteDatabase } from '../../utils/db-utils';

@Component({
  selector: 'app-land-preperation',
  templateUrl: './land-preperation.page.html',
  styleUrls: ['./land-preperation.page.scss'],
})
export class LandPreperationPage implements OnInit {

  sqlite: any;
  platform: string;
  handlerPermissions: any;
  initPlugin: boolean = false;

  processes: string[] = ["Starting up..."];

  constructor(private _sqlite: SqliteService) { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.processes.push('%%%% in TestencryptionPage this._sqlite ' + JSON.stringify( this._sqlite));
    try {
      await this.runTest();
      // document!!.querySelector('.sql-allsuccess').classList.remove('display');
      this.processes.push('$$$ runTest was successful');
    } catch (err: any) {
      // document!!.querySelector('.sql-allfailure').classList.remove('display');
      this.processes.push(`$$$ ERRo ${err.message}`);
    }
  }

  async runTest(): Promise<void> {
    try {
      let result: any = await this._sqlite.echo('Hello World');
      this.processes.push(' from Echo ' + result.value);

      // ************************************************
      // Create Database No Encryption
      // ************************************************

      // initialize the connection
      let db = await this._sqlite.createConnection(
        'testEncryption',
        false,
        'no-encryption',
        1,
      );
      this.processes.push('Initialising connection... ' + JSON.stringify(result.value));


      // open db testEncryption
      await db.open();
      this.processes.push('Opening connection... ');

      // create tables in db
      let ret: any = await db.execute(createSchema);
      this.processes.push('$$$ Creating table... ' + ret.changes.changes);
      if (ret.changes.changes < 0) {
        this.processes.push('$$$ Error: No changes happened... ');
        return Promise.reject(new Error('Execute createSchema failed'));
      }

      // create synchronization table
      ret = await db.createSyncTable();
      this.processes.push('$$$ Creating synchronization table... ' + ret.changes.changes);
      if (ret.changes.changes < 0) {
        this.processes.push('$$$ Error: No changes happened... ');
        return Promise.reject(new Error('Execute createSyncTable failed'));
      }

      // set the synchronization date
      const syncDate: string = '2020-11-25T08:30:25.000Z';
      await db.setSyncDate(syncDate);
      this.processes.push('$$$ Setting up synchronization date ' + syncDate);

      // add two users in db
      ret = await db.execute(twoUsers);
      this.processes.push('$$$ Adding two users in db ' + twoUsers);
      if (ret.changes.changes !== 2) {
        this.processes.push('$$$ Error: Adding two users in db');
        return Promise.reject(new Error('Execute twoUsers failed'));
      }
      // select all users in db
      ret = await db.query('SELECT * FROM users;');
      this.processes.push('$$$ Selecting all users in db');
      if (
        ret.values.length !== 2 ||
        ret.values[0].name !== 'Whiteley' ||
        ret.values[1].name !== 'Jones'
      ) {
        this.processes.push('$$$ Error: Selecting all users in db');
        return Promise.reject(new Error('Query1 twoUsers failed'));
      }

      // select users where company is NULL in db
      // ret = await db.query('SELECT * FROM users WHERE company IS NULL;');
      // if (
      //   ret.values.length !== 2 ||
      //   ret.values[0].name !== 'Whiteley' ||
      //   ret.values[1].name !== 'Jones'
      // ) {
      //   return Promise.reject(
      //     new Error('Query2 Users where Company null failed'),
      //   );
      // }
      // add one user with statement and values
      // let sqlcmd: string = 'INSERT INTO users (name,email,age) VALUES (?,?,?)';
      // let values: Array<any> = ['Simpson', 'Simpson@example.com', 69];
      // ret = await db.run(sqlcmd, values);
      // this.processes.push();
      // if (ret.changes.lastId !== 3) {
      //   return Promise.reject(new Error('Run1 add 1 User failed'));
      // }
      // add one user with statement
      // sqlcmd =
      //   `INSERT INTO users (name,email,age) VALUES ` +
      //   `("Brown","Brown@example.com",15)`;
      // ret = await db.run(sqlcmd);
      // if (ret.changes.lastId !== 4) {
      //   return Promise.reject(new Error('Run2 add 1 User failed'));
      // }

      await this._sqlite.closeConnection('testEncryption');
      this.processes.push('$$$ Closing connection');

      // ************************************************
      // Encrypt the existing database
      // ************************************************

      // // initialize the connection
      // db = await this._sqlite.createConnection(
      //   'testEncryption',
      //   true,
      //   'encryption',
      //   1,
      // );
      //
      // // open db testEncryption
      // await db.open();
      // // close the connection
      // await this._sqlite.closeConnection('testEncryption');
      // this.processes.push('closeConnection encrypted ');
      // // ************************************************
      // // Work with the encrypted  database
      // // ************************************************
      //
      // // initialize the connection
      // db = await this._sqlite.createConnection(
      //   'testEncryption',
      //   true,
      //   'secret',
      //   1,
      // );
      //
      // // open db testEncryption
      // await db.open();
      //
      // // add one user with statement and values
      // sqlcmd = 'INSERT INTO users (name,email,age) VALUES (?,?,?)';
      // values = ['Jackson', 'Jackson@example.com', 32];
      // ret = await db.run(sqlcmd, values);
      // if (ret.changes.lastId !== 5) {
      //   return Promise.reject(new Error('Run3 add 1 User failed'));
      // }
      //
      // // select all users in db
      // ret = await db.query('SELECT * FROM users;');
      // this.processes.push('query encrypted ' + ret.values.length);
      // if (
      //   ret.values.length !== 5 ||
      //   ret.values[0].name !== 'Whiteley' ||
      //   ret.values[1].name !== 'Jones' ||
      //   ret.values[2].name !== 'Simpson' ||
      //   ret.values[3].name !== 'Brown' ||
      //   ret.values[4].name !== 'Jackson'
      // ) {
      //   return Promise.reject(new Error('Query3  5 Users failed'));
      // }
      //
      // // delete it for multiple successive tests
      // // await this._sqlite.deleteOldDatabases()
      //
      // await this._sqlite.closeConnection('testEncryption');


      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }

}
