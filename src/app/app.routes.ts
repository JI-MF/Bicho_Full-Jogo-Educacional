import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { LayoutLoginDefault } from './components/layout-login-default/layout-login-default';
import { SignupComponent } from './page/singnup/login/signup';
import { Game } from './page/game/game';
import { MoneyWallet } from './page/money-wallet/money-wallet';
import { Start } from './page/start/start';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },

    {
        path: "singnup",
        component: SignupComponent
    },

    {
        path: "game",
        component: Game
    },

    {
        path: "money-wallet",
        component: MoneyWallet
    },

    {
        path: "start",
        component: Start
    }

];
