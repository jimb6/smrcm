import {Component, Input, OnInit} from '@angular/core';
import {SwiperOptions} from "swiper/types";
import {ModalController} from "@ionic/angular";


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  @Input() img: string;
  config: SwiperOptions = {
    zoom: true,

  }

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  zoom(b: boolean) {

  }

  close() {
    this.modalCtrl.dismiss()
  }
}
