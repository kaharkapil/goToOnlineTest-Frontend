import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



/* Module */
import { UserDashboardModule } from './user-dashboard.module';


/* Containers */
import * as userDashboardContainers from './containers';

/* Guards */
import * as userDashboardGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';
import { ViewDetailsComponent, StartTestComponent } from './components';
import { ResultComponent } from './components/result/result.component';


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
          canActivate: [userDashboardGuards.UserDashboradGuard],
          component: userDashboardContainers.UserDashboardComponent,
      },
      {
        path: 'view-details',
        data: {
            title: 'goToOnlineTest',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [userDashboardGuards.UserDashboradGuard],
        component: ViewDetailsComponent,
    },
    {
        path: 'start-test/:testId',
        data: {
            title: 'goToOnlineTest',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate:[],
        component: StartTestComponent,
    },
    {
        path: 'result/:testId',
        data: {
            title: 'goToOnlineTest',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate:[],
        component: ResultComponent,
    },

    ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserDashboardModule,
    RouterModule.forChild(ROUTES),
  ],
  exports:[RouterModule]
})
export class UserDashboardRoutingModule { }
