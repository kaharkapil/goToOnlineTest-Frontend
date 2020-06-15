import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home.module';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { HomeComponent } from './components/home/home.component';




/* modules */

import { DashboardModule } from '@modules/dashboard/dashboard.module';


/* containers */
import * as dashboardContainers from './../dashboard/containers';
import * as homeContainers from './containers';





export const ROUTES: Routes = [
  {
      path: '',
      data: {
          title: 'home - goToOnlineTest',
          breadcrumbs: [
              {
                  text: 'home',
                  active: true,
              },
          ],
      } as SBRouteData,
      canActivate: [],
      component: HomeComponent,
  },
  {
    path: 'login',
    canActivate: [],
    component:homeContainers.LoginComponent,
    data: {
        title: 'Login -goToOnlineTest ',
    } as SBRouteData,
},
{
  path: 'signup',
  canActivate: [],
  component: homeContainers.SignupComponent,
  data: {
      title: 'SignUp - goToOnlineTest',
  } as SBRouteData,
},
{
  path: 'forgot-password',
  canActivate: [],
  component: homeContainers.ForgotPasswordComponent,
  data: {
      title: 'Forgot Password - goToOnlineTest',
  } as SBRouteData,
},


  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    DashboardModule,
    RouterModule.forChild(ROUTES),
  ],
  exports:[RouterModule],
})

export class HomeRoutingModule { }
