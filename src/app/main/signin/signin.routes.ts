import { Routes } from '@angular/router';
import { SigninSuccessComponent } from './components';

export const routes: Routes = [
    {
        path: 'oauth/success',
        component: SigninSuccessComponent,
        title: 'Login Success...'
    }
];