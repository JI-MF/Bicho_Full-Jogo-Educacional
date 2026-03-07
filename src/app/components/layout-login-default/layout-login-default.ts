import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout-login-default',
  standalone:true,
  imports: [],
  templateUrl: './layout-login-default.html',
  styleUrls: ['./layout-login-default.scss'],
})
export class LayoutLoginDefault {
  titulo = input<string>("");
  primayBtnteste= input<string>("");
  secondayBtnteste= input<string>("");
  disableprimarybtn=input<boolean>(true);

  @Output("submit") onSubmit= new EventEmitter();
  @Output("navigate") onNavigate= new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
  
}
