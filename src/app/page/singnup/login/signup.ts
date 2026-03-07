import { Component } from '@angular/core';
import { LayoutLoginDefault } from '../../../components/layout-login-default/layout-login-default';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputOne } from '../../../components/input-one/input-one';
import { Router } from '@angular/router';
import { LoginResponse } from '../../../types/login-response.type';
import { LoginServices } from '../../../services/login-services/login-services';
import { ToastrService } from 'ngx-toastr';

interface SignupForm{
  name:FormControl
  email:FormControl
  password: FormControl
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  imports: [
    LayoutLoginDefault,
    ReactiveFormsModule,
    InputOne
  ],
  providers:[LoginServices],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>
  
  

  constructor(
    private router: Router,
    private loginService: LoginServices,
    private toastr: ToastrService
    
  ){


    this.signupForm=new FormGroup({
      name:new FormControl('',[Validators.required, Validators.minLength(3)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(4)])
    })

  }

  submit(){
    this.loginService.login(this.signupForm.value.email!, this.signupForm.value.password).subscribe({
      next:() => this.toastr.success("Login realizado com sucesso"),
      error:() => this.toastr.error("Não foi possivél fazer o login, Tente novamente!!!!")
    })
    
  }

  navigate(){
   this.router.navigate(["login"])
  }
}
