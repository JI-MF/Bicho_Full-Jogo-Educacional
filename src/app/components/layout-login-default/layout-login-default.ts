import { Component, input } from '@angular/core';

@Component({
  selector: 'app-layout-login-default',
  imports: [],
  templateUrl: './layout-login-default.html',
  styleUrl: './layout-login-default.scss',
})
export class LayoutLoginDefault {
  titulo = input<string>("");
  primayBtnteste= input<string>("");
  secundayBtnteste= input<string>("");

}
