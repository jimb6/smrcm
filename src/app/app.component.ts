import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/pages/home', icon: 'home-outline' },
    { title: 'Land Preparation', url: '/pages/land-preperation', icon: 'golf-outline' },
    { title: 'Use of Fertilizer', url: '/pages/fertilizer', icon: 'shield-checkmark-outline' },
    { title: 'Post Harvest', url: '/pages/harvest', icon: 'archive-outline' },
    { title: 'Crop Calendar', url: '/pages/calendar', icon: 'calendar-number-outline' },
    { title: 'Best Variety', url: '/pages/variety', icon: 'leaf-outline' },
    { title: 'Water', url: '/pages/water', icon: 'water-outline' },
    { title: 'Pest & Diseases', url: '/pages/pests-diseases', icon: 'bug-outline' },
    { title: 'Harvest on Time', url: '/pages/harvest', icon: 'alarm-outline' },
    { title: 'Storage', url: '/pages/storage', icon: 'archive-outline' },
  ];
  public labels = [
    { title: 'Account', url: '', icon: 'key-outline'},
    { title: 'logout', url: 'pages/login', icon: 'exit-outline'},
  ];
  constructor() {}
}
