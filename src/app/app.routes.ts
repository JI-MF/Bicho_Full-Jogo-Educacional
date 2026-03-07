import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { LayoutLoginDefault } from './components/layout-login-default/layout-login-default';
import { SignupComponent } from './page/singnup/login/signup';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },

    {
        path: "singnup",
        component: SignupComponent
    }
];
