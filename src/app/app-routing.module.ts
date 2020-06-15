import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/components/home/home.component';
import { AppRouteGuard } from './app-route.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },

    {
        path:"home",
        loadChildren:()=>
             import('modules/home/home-routing.module').then(m=> m.HomeRoutingModule),

    },
    
  
    
     {
         path: 'dashboard',
         loadChildren: () =>
             import('modules/dashboard/dashboard-routing.module').then(
                 m => m.DashboardRoutingModule
             ),
        canActivate:[AppRouteGuard]

     },
     {
        path: 'user-dashboard',
        loadChildren: () =>
            import('modules/user-dashboard/user-dashboard-routing.module').then(
                m => m.UserDashboardRoutingModule
            ),
    },
   
   
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
