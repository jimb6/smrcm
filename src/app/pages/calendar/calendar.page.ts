import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageModalPage} from "../image-modal/image-modal.page";
import {ActionSheetController, IonModal, IonRouterOutlet, ModalController} from "@ionic/angular";
import {NewSchedulePage} from "../new-schedule/new-schedule.page";
import {StorageService} from "../../services/storage.service";
import {Schedule} from "../../utils/shims";
import * as moment from "moment";
import {CalEvent, EventsService} from "../../services/events.service";
import {LocalNotifications} from "@capacitor/local-notifications";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  highlightedDates: any = [];

  date: string;
  type: 'string';

  schedules: Schedule[] = [];
  schedule: any = new Schedule();

  landPreparation: number = 30
  seedPreparation: number = 1
  broadcasting: number = 18
  plotting: number = 1
  transplanting: number = 1
  sideDressFertilizer: number = 10
  topDressFertilizer: number = 15
  firstMonitoring: number[] = [16, 40]
  secondMonitoring: number[] = [90, 100]
  harvesting: number = 100
  postHarvesting: number[] = [2, 3]

  currentSelectedDate: any
  currentSelectedEvent: string = ''

  // @ViewChild(Calendar) myCal!: CalendarComponent
  @ViewChild('modal') modal: IonModal;
  presentingElement: any = null

  constructor(private modalController: ModalController,
              private actionSheetCtrl: ActionSheetController,
              private storage: StorageService,
              private eventService: EventsService) {
  }

  async ngOnInit() {
    await this.getSchedules();
  }

  onChange($event: any) {
  }

  async openPreview(img: string) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img
      },
      cssClass: 'transparent-modal'
    })

    modal.present();
  }

  highlightSchedule(data: Schedule) {

    this.highlightedDates = [
      {
        date: moment(data.landPrep).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Land Preparation'
      },
      {
        date: moment(data.seedlingPrep).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Seedling Preparation'
      },
      {
        date: moment(data.broadcasting).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Broadcasting of Seedlings'
      },
      {
        date: moment(data.plotting).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Preparation of Rice Field (Plotting)'
      },
      {
        date: moment(data.transplanting).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Transplanting of the Pre-geminated Seeds'
      },
      {
        date: moment(data.sideDressFertilizer).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Side Dressing of Fertilizer'
      },
      {
        date: moment(data.topDressFertilizer).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Top Dressing of Fertilizer'
      },
      {
        date: moment(data.firstMonitoring[0]).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Monitoring 16-40 days after transplanting'
      },
      {
        date: moment(data.firstMonitoring[1]).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Monitoring 16-40 days after transplanting'
      },
      {
        date: moment(data.secondMonitoring[0]).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Monitoring 90-100 days after transplanting'
      },
      {
        date: moment(data.secondMonitoring[1]).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Monitoring 90-100 days after transplanting'
      },
      {
        date: moment(data.preHarvesting).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: '100th days - Harvesting'
      },
      {
        date: moment(data.postHarvesting[0]).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: '2-3 Days After Harvesting'
      },
      {
        date: moment(data.postHarvesting[1]).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: '2-3 Days After Harvesting'
      },
      {
        date: moment(data.milling).format('YYYY-MM-DD'),
        textColor: '#f4f5f8',
        backgroundColor: '#FABC15',
        label: 'Milling & Storage'
      }
    ]
  }

  async getSchedules() {
    this.schedules = await this.storage.getSchedulesData()
  }

  async addSchedule($event: any) {
    const confirm = await this.canDismiss('Please confirm to save new schedule')
    if (confirm) {
      for (const key of Object.keys(this.schedule)) {
        if (key !== 'label' && key !== 'remarks') {
          console.log(this.schedule[key]);
          const id = Math.floor(Math.random() * (100000 - 1)) + 1;
          const title = this.schedule.title;
          const body = key;
          const extra = {data: ''}
          const iconColor = '#0000FF';

          if (Array.isArray(this.schedule[key])) {
            for (let i = 0; i < this.schedule[key].length; i++) {
              const date = new Date(this.schedule[key][i])
              date.setHours(3, 0, 0, 0)
              const schedule = {
                at: date,
                count: 1
              }
              await this.addNotification(id, title, body, extra, iconColor, schedule)
            }
          } else {
            const date = new Date(this.schedule[key])
            date.setHours(3, 0, 0, 0)
            const schedule = {
              at: date,
              count: 1
            }
            await this.addNotification(id, title, body, extra, iconColor, schedule)
          }
        }
      }
      await this.storage.insertNewScheduleData(this.schedule);
      await this.modal.dismiss();
      await this.getSchedules();
    }

  }

  async addNotification(id: number, title: string, body: string, extra: object, iconColor: string, schedule: object) {
    await LocalNotifications.schedule({
      notifications: [
        {
          title,
          body,
          id,
          extra,
          iconColor,
          schedule
        }
      ]
    })
  }

  async deleteSchedule(schedule: Schedule) {
    const deleteConfirmation = await this.canDismiss('Are you sure you want to delete schedule?');
    if (deleteConfirmation) {
      await this.storage.deleteScheduleData(schedule.label);
      await this.getSchedules()
    }
  }

  displayEvent($event: any) {
    for (let i = 0; i < this.highlightedDates.length; i++) {
      if (this.highlightedDates[i].date === moment(this.currentSelectedDate).format('YYYY-MM-DD')) {
        this.currentSelectedEvent = this.highlightedDates[i].label;
        break;
      }
    }
  }

  updateLandPreparation($event: any) {
    let tempDate = new Date($event.detail.value);

    this.schedule.landPrep = tempDate

    this.schedule.seedlingPrep = new Date(tempDate);
    this.schedule.seedlingPrep.setDate(tempDate.getDate() + this.landPreparation);
    this.schedule.seedlingPrep.setHours(12, 0, 0, 0);
    tempDate = this.schedule.seedlingPrep;

    this.schedule.broadcasting = new Date(tempDate);
    this.schedule.broadcasting.setDate(tempDate.getDate() + this.seedPreparation);
    this.schedule.broadcasting.setHours(12, 0, 0, 0);
    tempDate = this.schedule.broadcasting;

    this.schedule.plotting = new Date(tempDate);
    this.schedule.plotting.setDate(tempDate.getDate() + this.broadcasting);
    this.schedule.plotting.setHours(12, 0, 0, 0);
    tempDate = this.schedule.plotting;

    this.schedule.transplanting = new Date(tempDate);
    this.schedule.transplanting.setDate(tempDate.getDate() + this.plotting);
    this.schedule.transplanting.setHours(12, 0, 0, 0);
    tempDate = this.schedule.transplanting;

    this.schedule.sideDressFertilizer = new Date(tempDate);
    this.schedule.sideDressFertilizer.setDate(tempDate.getDate() + this.sideDressFertilizer);
    this.schedule.sideDressFertilizer.setHours(12, 0, 0, 0);
    this.schedule.topDressFertilizer = new Date(tempDate);
    this.schedule.topDressFertilizer.setDate(tempDate.getDate() + this.topDressFertilizer)
    this.schedule.topDressFertilizer.setHours(12, 0, 0, 0);

    this.schedule.firstMonitoring[0] = new Date(tempDate);
    this.schedule.firstMonitoring[1] = new Date(tempDate);
    this.schedule.firstMonitoring[0].setDate(tempDate.getDate() + this.firstMonitoring[0]);
    this.schedule.seedlingPrep.setHours(12, 0, 0, 0);
    this.schedule.firstMonitoring[1].setDate(tempDate.getDate() + this.firstMonitoring[1]);
    this.schedule.seedlingPrep.setHours(12, 0, 0, 0);

    this.schedule.secondMonitoring[0] = new Date(tempDate)
    this.schedule.secondMonitoring[1] = new Date(tempDate)
    this.schedule.secondMonitoring[0].setDate(tempDate.getDate() + this.secondMonitoring[0])
    this.schedule.secondMonitoring[0].setHours(12, 0, 0, 0);
    this.schedule.secondMonitoring[1].setDate(tempDate.getDate() + this.secondMonitoring[1])
    this.schedule.secondMonitoring[0].setHours(12, 0, 0, 0);

    this.schedule.preHarvesting = new Date(tempDate);
    this.schedule.preHarvesting.setDate(tempDate.getDate() + this.harvesting);
    this.schedule.preHarvesting.setHours(12, 0, 0, 0);
    tempDate = this.schedule.preHarvesting;

    this.schedule.postHarvesting[0] = new Date(tempDate);
    this.schedule.postHarvesting[1] = new Date(tempDate);
    this.schedule.postHarvesting[0].setDate(tempDate.getDate() + this.postHarvesting[0]);
    this.schedule.postHarvesting[0].setHours(12, 0, 0, 0);
    this.schedule.postHarvesting[1].setDate(tempDate.getDate() + this.postHarvesting[1]);
    this.schedule.postHarvesting[1].setHours(12, 0, 0, 0);
    tempDate = this.schedule.postHarvesting[0];

    this.schedule.milling = new Date(tempDate);
    this.schedule.milling.setDate(tempDate.getDate() + 2)
    this.schedule.milling.setHours(12, 0, 0, 0);

  }

  canDismiss = async (message: string) => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: message,
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
    const {role} = await actionSheet.onWillDismiss();
    return role === 'confirm';
  };

}
