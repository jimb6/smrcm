import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {SwiperOptions} from "swiper/types";
import {ImageModalPage} from "../image-modal/image-modal.page";
@Component({
  selector: 'app-pest-diseases',
  templateUrl: './pest-diseases.page.html',
  styleUrls: ['./pest-diseases.page.scss'],
})
export class PestDiseasesPage implements OnInit {


  config: SwiperOptions = {

  }
  constructor(private loadingCtrl: LoadingController,
              private alertController: AlertController,
              private modalController: ModalController) { }

  ngOnInit() {
    Camera.requestPermissions().then(r => {

    })
    Camera.checkPermissions().then(r => {

    })
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;

    await this.processImage(imageUrl)

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }

  async processImage(imgUrl: string) {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait while processing image...',
      duration: 5000,
    });
    loading.present();
  }

  async presentImageResult() {
    const alert = await this.alertController.create({
      header: 'Analysis Result',
      subHeader: 'Pest and Die',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
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
