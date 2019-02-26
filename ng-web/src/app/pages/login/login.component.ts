import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import AuthService from '../../services/AuthService'
import { Router } from '@angular/router';
import User from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: User;
  userForm: FormGroup;

  constructor(private service: AuthService, private router: Router) {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  get name() { return this.userForm.get('name'); }

  get email() { return this.userForm.get('email'); }

  get password() { return this.userForm.get('password'); }

  ngOnInit() {

  }

  onLoginClick() {
    if (this.userForm.valid) {
      this.service.login(this.userForm.value).subscribe(this.redirect);
    }
  }

  onRegisterClick() {
    if (this.userForm.valid) {
      this.service.register(this.userForm.value).subscribe(this.redirect);
    }
  }

  redirect = () => {
    this.router.navigateByUrl('/news');
  }
}
