import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {MenuController, ToastController, ViewDidEnter} from "@ionic/angular";
import {User} from "../../models/User";
import {UserRepository} from "../../repositories/users/user.repository";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, ViewDidEnter {

  signupForm: FormGroup;
  user: User;
  signingUp: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private menu: MenuController,
    private userRepository: UserRepository,
    private toast: ToastService
  ) {
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

  async submitForm() {
    if (this.signupForm.valid) {
      this.signingUp = true;
      var params = this.signupForm.value;
      this.user = {fullName: params.fullName, username: params.username, password: params.password} as User
      await this.userRepository.create(this.user)
        .then((res: any) => {
          this.toast.show(
            'Changes successfully saved!',
            'checkmark-outline',
            'success',
            'custom-toast',
            [{text: 'Dismiss', role: 'cancel'}]
          )
          this.signingUp = false;
        })
        .catch((err: any) => {
          this.toast.show(
            'Failed to save changes.',
            'close-circle-outline',
            'danger',
            'custom-toast',
            [{text: 'Dismiss', role: 'cancel'}]
          )
          this.signingUp = false;
        })
    }
  }

}
