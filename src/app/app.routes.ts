import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActualityComponent } from './pages/dashboard/actuality/actuality.component';
import { ItemGameComponent } from './pages/dashboard/item-game/item-game.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'actuality',
        component: ActualityComponent
    },
    {
        path: 'watch/:id',
        component: ItemGameComponent,
    }
];
