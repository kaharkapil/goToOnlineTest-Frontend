/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
import * as dashboardGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
      {
          path: '',
          data: {
              title: 'Dashboard - goToOnlineTest',
              breadcrumbs: [
                  {
                      text: 'Dashboard',
                      active: true,
                  },
              ],
          } as SBRouteData,
          canActivate: [dashboardGuards.DashboardGuard],
          component: dashboardContainers.DashboardComponent,
      },
     {
         path: 'static',
         data: {
             title: 'Dashboard Static - goToOnlineTest',
             breadcrumbs: [
                 {
                     text: 'Dashboard',
                     link: '/dashboard',
                 },
                 {
                     text: 'Static',
                     active: true,
                 },
             ],
         } as SBRouteData,
         canActivate: [dashboardGuards.DashboardGuard],
         component: dashboardContainers.StaticComponent,
     },

     {
        path: 'test',
        loadChildren: () =>
            import('modules/test/test-routing.module').then(
                m => m.TestRoutingModule
            ),

    },
   
];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
