import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from "@ionic/angular";
import {StorageService} from "../../services/storage.service";
import {Schedule} from "../../utils/shims";

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.page.html',
  styleUrls: ['./new-schedule.page.scss'],
})
export class NewSchedulePage implements OnInit {


  schedule: Schedule = new Schedule();

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


  constructor(public modalCtrl: ModalController, private storage: StorageService) {
  }

  ngOnInit() {
  }


  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {

    this.storage.insertNewScheduleData(this.schedule);
    return this.modalCtrl.dismiss(this.schedule, 'confirm');
  }

  updateLandPreparation($event: any) {
    let tempDate = new Date($event.detail.value);

    this.schedule.landPrep = tempDate;

    this.schedule.seedlingPrep = new Date(tempDate);
    this.schedule.seedlingPrep.setDate(tempDate.getDate() + this.landPreparation);
    tempDate = this.schedule.seedlingPrep;

    this.schedule.broadcasting = new Date(tempDate);
    this.schedule.broadcasting.setDate(tempDate.getDate() + this.seedPreparation);
    tempDate = this.schedule.broadcasting;

    this.schedule.plotting = new Date(tempDate);
    this.schedule.plotting.setDate(tempDate.getDate() + this.broadcasting);
    tempDate = this.schedule.plotting;

    this.schedule.transplanting = new Date(tempDate);
    this.schedule.transplanting.setDate(tempDate.getDate() + this.plotting);
    tempDate = this.schedule.transplanting;

    this.schedule.sideDressFertilizer = new Date(tempDate);
    this.schedule.sideDressFertilizer.setDate(tempDate.getDate() + this.sideDressFertilizer);
    this.schedule.topDressFertilizer = new Date(tempDate);
    this.schedule.topDressFertilizer.setDate(tempDate.getDate() + this.topDressFertilizer)

    this.schedule.firstMonitoring[0] = new Date(tempDate);
    this.schedule.firstMonitoring[1] = new Date(tempDate);
    this.schedule.firstMonitoring[0].setDate(tempDate.getDate() + this.firstMonitoring[0]);
    this.schedule.firstMonitoring[1].setDate(tempDate.getDate() + this.firstMonitoring[1]);

    this.schedule.secondMonitoring[0] = new Date(tempDate)
    this.schedule.secondMonitoring[1] = new Date(tempDate)
    this.schedule.secondMonitoring[0].setDate(tempDate.getDate() + this.secondMonitoring[0])
    this.schedule.secondMonitoring[1].setDate(tempDate.getDate() + this.secondMonitoring[1])

    this.schedule.preHarvesting = new Date(tempDate);
    this.schedule.preHarvesting.setDate(tempDate.getDate() + this.harvesting);
    tempDate = this.schedule.preHarvesting;

    this.schedule.postHarvesting[0] = new Date(tempDate);
    this.schedule.postHarvesting[1] = new Date(tempDate);
    this.schedule.postHarvesting[0].setDate(tempDate.getDate() + this.postHarvesting[0]);
    this.schedule.postHarvesting[1].setDate(tempDate.getDate() + this.postHarvesting[1]);



  }
}
