import { Component } from '@angular/core';
import { LayoutLoginDefault } from '../../components/layout-login-default/layout-login-default';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { InputOne } from '../../components/input-one/input-one';

@Component({
  selector: 'app-login',
  imports: [
    LayoutLoginDefault,
    ReactiveFormsModule,
    InputOne
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup
  

  constructor(){

    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })

  }
}
