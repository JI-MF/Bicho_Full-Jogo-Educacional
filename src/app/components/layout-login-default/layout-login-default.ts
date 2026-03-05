import { Component, input } from '@angular/core';
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
  secundayBtnteste= input<string>("");

}
