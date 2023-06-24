import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ResolveEnd, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {LoadingController, MenuController, ViewWillEnter} from "@ionic/angular";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form!: any;
  errorMessage: string = '';
  serial: string = '';
  validation_messages = {
    'email': [
      {type: 'required', message: 'Email is required.'},
    ],
    'password': [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password must be at least 5 characters long.'}
    ]
  };

  loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private menu: MenuController
  ) {

  }

  ionViewDidEnter() {
    this.menu.enable(false)
  }

  async ngOnInit() {

  }


  async ionViewWillEnter() {

  }

  async ionViewDidLeave() {
    this.closeLoading()
  }

  async tryLogin(value: any) {
    await this.showLoading()

  }

  async closeLoading() {
    this.loading.dismiss()
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'circles',
    });
    this.loading.present();
  }

}
