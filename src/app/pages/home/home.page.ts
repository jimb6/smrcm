import {Component, OnInit} from '@angular/core';
import {ContentRepository} from "../../repositories/contents/content.repository";
import {ContentDefaultQueryRepository} from "../../repositories/contents/content.default.query";
import {DetailService} from "../../services/detail.service";
import {ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, ViewWillEnter {

  public menu = [
    {title: 'best variety', subtitle: 'Pagpili sa Binhi', image: 'assets/images/best_variety.png', url: '/pages/variety'},
    {title: 'land preparation', subtitle: 'Pag-andam sa Uma', image: 'assets/images/Land Preparation.jpg', url: '/pages/land-preparation'},
    {title: 'planting', subtitle: 'Pagtanum', image: 'assets/images/planting/Picture6.png', url: '/pages/planting'},
    {title: 'use of fertilizer', subtitle: 'Pagdumala sa Nutrina', image: 'assets/images/fertilizer/Picture5.jpg', url: '/pages/fertilizer'},
    {title: 'water', subtitle: 'Pagdumala sa Patubig', image: 'assets/images/water/Picture12.jpg', url: '/pages/water'},
    {title: 'pests & diseases', subtitle: 'Pagdumala sa Peste', image: 'assets/images/pest_diseases/Picture8.png', url: '/pages/pests-diseases'},
    {title: 'crop calendar', subtitle: '', image: 'assets/images/crop_calendar/Picture9.jpg', url: '/pages/calendar'},
    {title: 'harvest on time', subtitle: 'Pagdumala sa Ani', image: 'assets/images/harvest_on_time/Picture10.png', url: '/pages/harvest-time'},
    {title: 'storage', subtitle: 'Pagdumala Human sa Pag-ani',  image: 'assets/images/storage/Picture11.jpg', url: '/pages/storage'},
  ]
  public selectedCard = 0;
  public exConn: boolean;



  constructor(
    private contentDefaultRepository: ContentDefaultQueryRepository,
    private contentRepository: ContentRepository,
    private _detailService: DetailService,
  ) {
  }

  async ngOnInit() {
  }

  ionViewWillEnter() {
    this.exConn = this._detailService.getExistingConnection();
  }

}
