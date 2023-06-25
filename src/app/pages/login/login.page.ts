import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ResolveEnd, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {LoadingController, MenuController, ViewDidEnter, ViewWillEnter} from "@ionic/angular";
import {User} from "../../models/User";
import {UserRepository} from "../../repositories/users/user.repository";
import {ContentDefaultQueryRepository} from "../../repositories/contents/content.default.query";
import {ContentRepository} from "../../repositories/contents/content.repository";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, ViewDidEnter {

  loginForm: FormGroup;
  user: User;
  errorMessage: string = '';
  loggingIn: boolean = false;

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
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  async tryLogin() {
    this.loggingIn = true;
    var params = this.loginForm.value;
    this.authService.doLogin(params.username, params.password)
      .then(async (user: User) => {
        this.loggingIn = false;
        await this.router.navigate(["/pages/home"]);
        await this.menu.enable(true)
      }).catch((ex: any) => {
      this.loggingIn = false;
      this.errorMessage = 'Invalid username or password!';
    });
  }
}
