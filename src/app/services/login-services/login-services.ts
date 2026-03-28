import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-services',
  imports: [],
  templateUrl: './login-services.html',
  styleUrl: './login-services.scss',
})
export class LoginServices {
  apiUrl: String="http://localhost:8080/auth"

  constructor(private httpClient: HttpClient){}

  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>( this.apiUrl+"/login", {email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }

  signup(name: string, email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl+"/register", {name, email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }

}

@Injectable({
  providedIn: 'root'
})

export class WalletService {

  private balance = new BehaviorSubject<number>(100);
  balance$ = this.balance.asObservable();

  constructor() {}

  getBalance() {
    return this.balance.value;
  }

  addBalance(value: number) {
    this.balance.next(this.balance.value + value);
  }

  subtractBalance(value: number) {
    this.balance.next(this.balance.value - value);
  }

}
