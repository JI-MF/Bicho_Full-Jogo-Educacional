import { Component } from '@angular/core';
import { LayoutLoginDefault } from '../../components/layout-login-default/layout-login-default';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { InputOne } from '../../components/input-one/input-one';
import { Router } from '@angular/router';
import { LoginResponse } from '../../types/login-response.type';
import { LoginServices } from '../../services/login-services/login-services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [
    LayoutLoginDefault,
    ReactiveFormsModule,
    InputOne
  ],
  providers:[LoginServices],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup
  toastService: any;
  

  constructor(
    private router: Router,
    private loginService: LoginServices,
    private toastr: ToastrService
    
  ){


    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })

  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next:() => this.toastr.success("Login realizado com sucesso"),
      error:() => this.toastr.error("Não foi possivél fazer o login, Tente novamente!!!!")
    })
    
  }

  navigate(){
   this.router.navigate(["singnup"])
  }
}
