import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {MenuController, ViewDidEnter} from "@ionic/angular";
import {DatabaseService} from "../../services/database.service";
import {UserRepository} from "../../repositories/user.repository";
import {User} from "../../models/User";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, ViewDidEnter {

  signupForm: FormGroup;
  user: User;

  constructor(public formBuilder: FormBuilder,
              private menu: MenuController,
              private userRepository: UserRepository) {
  }

  ionViewDidEnter() {
    this.menu.enable(false)
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullName: new FormControl('', Validators.compose(
        [Validators.required, Validators.minLength(2)])),
      username: new FormControl('', Validators.compose(
        [Validators.required, Validators.minLength(3)])),
      password: new FormControl('', Validators.compose(
        [Validators.required, Validators.minLength(5)])),
    })
  }

  get errorControl() {
    return this.signupForm.controls
  }

  async submitForm () {
    if (this.signupForm.valid) {
      var params = this.signupForm.value;
      this.user = { fullName: params.fullName, username: params.username, password: params.password } as User
      await this.userRepository.create(this.user)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      return false
    } else {
      return console.log('Please provide all required values!');
    }
  }

}
