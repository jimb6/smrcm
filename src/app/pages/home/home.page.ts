import {Component, OnInit} from '@angular/core';
import {Content} from "../../models/Content";
import {ContentRepository} from "../../repositories/contents/content.repository";
import {ContentDefaultQueryRepository} from "../../repositories/contents/content.default.query";
import {search} from "ionicons/icons";
import {DetailService} from "../../services/detail.service";
import {ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, ViewWillEnter {

  public menu = [
    {title: 'land preparation', image: 'assets/images/Land Preparation.jpg', url: '/pages/land-preparation'},
    {title: 'use of fertilizer', image: 'assets/images/use_fertilizer.jpg', url: '/pages/fertilizer'},
    {title: 'post harvest', image: 'assets/images/post_harvest.jfif', url: '/pages/harvest'},
    {title: 'crop calendar', image: 'assets/images/Crop Calendar.jpg', url: '/pages/calendar'},
    {title: 'best variety', image: 'assets/images/best_variety.png', url: '/pages/variety'},
    {title: 'water', image: 'assets/images/Water.jpg', url: '/pages/water'},
    {title: 'pests & diseases', image: 'assets/images/Pests & Diseases.jfif', url: '/pages/pests-diseases'},
    {title: 'harvest on time', image: 'assets/images/Harvest on Time.png', url: '/pages/harvest-time'},
    {title: 'storage', image: 'assets/images/Storage.jpg', url: '/pages/storage'},
  ]
  public selectedCard = 0;
  public exConn: boolean;

  searchedContents: Content[] = [];

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

  async globalSearch($event: any) {
    if ($event.target.value === '') {
      this.searchedContents = []
      return;
    }
    await this.contentDefaultRepository.searchContent($event.target.value)
      .then((res: Content[]) => this.searchedContents = res.slice(0, 5));
  }
}
