import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  async show(message: string = '', icon: string = '', color: string = '', cssClass: string = '', buttons: [{}] = [{}], duration: number = 2){
    const toast = await this.toastCtrl.create({
      icon,
      color,
      cssClass,
      message,
      buttons,
      duration
    })
    await toast.present();
  }
}
