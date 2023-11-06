import {Injectable} from '@angular/core';
import {SqliteService} from "./sqlite.service";
import {MigrationService} from "./migration.service";
import {SeederService} from "./seeder.service";
import {LocalNotifications} from "@capacitor/local-notifications";
import {StorageService} from "./storage.service";

@Injectable()
export class InitializeAppService {

  constructor(
    private sqliteService: SqliteService,
    private migrationService: MigrationService,
    private seederService: SeederService,
    private storage: StorageService
  ) {
  }

  async initializeApp(): Promise<any> {
    await this.sqliteService.initializePlugin().then(async (ret) => {
      try {
        await this.migrationService.migrate();
        await this.seederService.seed();
        return true;
      } catch (error) {
        throw Error(`initializeAppError: ${error}`);
      }
    })
    this.registerLocalNotificationActionTypes()
    await this.scheduleNotification()
    const isAppInit = await this.storage.isAppInitialized();
    if (!isAppInit) {
      await LocalNotifications.requestPermissions();
      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Welcome to Simplified Mobile-based Rice Crop Manager Application',
            body: 'Your all-in-one solution for seamless rice crop production. From ' +
              'land preparation to milling, our app has you covered. Explore ' +
              'detailed insights on the best varieties, land preparation techniques,' +
              ' optimal planting methods, fertilizer usage guidelines, effective watering strategies,' +
              ' pest and disease management tips, a comprehensive crop calendar,' +
              ' and efficient storage practices.' +
              ' Cultivate success with every swipe – your rice production journey starts here!',
            id: 1,
            iconColor: '#0000FF',
            actionTypeId: 'ABOUT'
          }
        ]
      })
    }
    await this.storage.initializeApp();
  }


  registerLocalNotificationActionTypes() {
    LocalNotifications.registerActionTypes({
      types: [
        {
          id: 'ABOUT',
          actions: [
            {
              id: 'view',
              title: 'Read more...'
            }
          ]
        }
      ]
    })
  }
  async scheduleNotification() {
    // const schedules = await this.storage.getSchedulesData();

    // for (let i=0; i<schedules.length; i++) {
      // console.log(schedules[i])

      // await LocalNotifications.schedule({
      //   notifications: [
      //     {
      //       title: '',
      //       body: '',
      //       id: 2,
      //       extra: {
      //         data: ''
      //       },
      //       iconColor: '',
      //       actionTypeId: 'ABOUT'
      //     }
      //   ]
      // })
    // }

  }
}
