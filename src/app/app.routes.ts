import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriespageComponent } from './pages/categoriespage/categoriespage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';


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
];
