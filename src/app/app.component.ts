import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Home', url: '/pages/home', icon: 'home-outline'},
    {title: 'Best Variety', url: '/pages/variety', icon: 'leaf-outline'},
    {title: 'Land Preparation', url: '/pages/land-preparation', icon: 'golf-outline'},
    {title: 'Planting', url: '/pages/planting', icon: 'rose-outline'},
    {title: 'Use of Fertilizer', url: '/pages/fertilizer', icon: 'shield-checkmark-outline'},
    // {title: 'Post Harvest', url: '/pages/harvest', icon: 'archive-outline'},
    {title: 'Water', url: '/pages/water', icon: 'water-outline'},
    {title: 'Pest & Diseases', url: '/pages/pests-diseases', icon: 'bug-outline'},
    {title: 'Crop Calendar', url: '/pages/calendar', icon: 'calendar-number-outline'},
    {title: 'Harvest on Time', url: '/pages/harvest-time', icon: 'alarm-outline'},
    {title: 'Storage', url: '/pages/storage', icon: 'archive-outline'},
    {title: 'About SMRCM', url: 'pages/about', icon: 'help-circle-outline'},
  ];
  public labels = [
    {title: 'Account', url: '', icon: 'key-outline'},
    {title: 'logout', url: 'pages/login', icon: 'exit-outline'},
  ];

  private initPlugin!: boolean;
  constructor(
  ) {
    // this.initializeApp();
  }

  initializeApp() {
    // this.platform.ready().then(async () => {
    //   this._sqlite.initializePlugin().then(ret => {
    //     this.initPlugin = ret;
    //     console.log('>>>> in App  this.initPlugin ' + this.initPlugin);
    //   });
    // });
  }
}
