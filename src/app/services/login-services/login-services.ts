import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login-services',
  imports: [],
  templateUrl: './login-services.html',
  styleUrl: './login-services.scss',
})
export class LoginServices {

  constructor(private httpClient: HttpClient){}

  login(name: string, password: string){
    return this.httpClient.post<LoginResponse>("/login", {name, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }

}
