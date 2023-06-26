import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fertilizer',
  templateUrl: './fertilizer.page.html',
  styleUrls: ['./fertilizer.page.scss'],
})
export class FertilizerPage implements OnInit {


  currentFragment: string;
  constructor(private router: ActivatedRoute) {
    router.fragment.subscribe((fragment: string) => this.currentFragment = fragment);
  }

  ngOnInit() {
    setTimeout(() => {
      const element = document.querySelector('#' + this.currentFragment);
      if (element != null) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }

}
