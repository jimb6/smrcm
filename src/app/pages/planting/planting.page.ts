import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ImageModalPage} from "../image-modal/image-modal.page";

@Component({
  selector: 'app-planting',
  templateUrl: './planting.page.html',
  styleUrls: ['./planting.page.scss'],
})
export class PlantingPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
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

}
