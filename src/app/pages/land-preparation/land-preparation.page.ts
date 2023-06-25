import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-land-preparation',
  templateUrl: './land-preparation.page.html',
  styleUrls: ['./land-preparation.page.scss'],
})
export class LandPreparationPage implements OnInit, AfterViewInit {

  currentPath: string;
  currentFragment: string;
  constructor(private router: ActivatedRoute, private route: Router) {
    router.fragment.subscribe((fragment: string) => this.currentFragment = fragment);
    this.currentPath = route.url
  }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    setTimeout(() => {
      const element = document.querySelector('#' + this.currentFragment);
      if (element != null) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }

}
