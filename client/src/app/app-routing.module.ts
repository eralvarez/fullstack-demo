import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'register',
        loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule),
    },
    {
        path: '**',
        redirectTo: 'dashboard',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
