import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriespageComponent } from './pages/categoriespage/categoriespage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { RegistrationpageComponent } from './pages/registrationpage/registrationpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';


export const routes: Routes = [
    {
        path:  ' ',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'productspage',
        component: ProductspageComponent,
    },
    {
        path: 'categoriespage',
        component: CategoriespageComponent,
    },
    {
        path: 'registrationpage',
        component: RegistrationpageComponent,
    },
    {
        path: 'loginpage',
        component: LoginpageComponent,
    }

];
