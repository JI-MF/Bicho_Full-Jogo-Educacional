import { Component } from '@angular/core';
import { LayoutLoginDefault } from '../../components/layout-login-default/layout-login-default';

@Component({
  selector: 'app-login',
  imports: [
    LayoutLoginDefault
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
