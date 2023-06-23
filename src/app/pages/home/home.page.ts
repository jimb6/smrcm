import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public menu = [
    { title: 'land preparation', image: 'assets/images/Land Preparation.jpg', url: 'pages/land-preparation'},
    { title: 'use of fertilizer', image: 'assets/images/use_fertilizer.jpg', url: 'pages/fertilizer'},
    { title: 'post harvest', image: 'assets/images/post_harvest.jfif', url: 'pages/harvest'},
    { title: 'crop calendar', image: 'assets/images/Crop Calendar.jpg', url: 'pages/calendar'},
    { title: 'best variety', image: 'assets/images/best_variety.jfif', url: 'pages/variety'},
    { title: 'water', image: 'assets/images/Water.jpg', url: 'pages/water'},
    { title: 'pests & diseases', image: 'assets/images/Pests & Diseases.jfif', url: 'pages/pests-diseases'},
    { title: 'harvest on time', image: 'assets/images/Harvest on Time.jpg', url: 'pages/harvest-time'},
    { title: 'storage', image: 'assets/images/Storage.jpg', url: 'pages/storage'},
  ]
  public selectedCard = 0;
  constructor() { }

  ngOnInit() {
  }

  onClickMenu(index: number) {
    this.selectedCard = index
    console.log("Clicked: " + index)
  }

}
