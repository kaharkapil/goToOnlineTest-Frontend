import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Components */
import * as userDashboardComponents from './components';


/* Containers */
import * as userDashboardContainers from './containers';

/* Guards */
import * as userDashboardGuards from './guards'

/* Services */
import * as userDashboardServices from './services';

import { UserDashboardCardsComponent } from './components/user-dashboard-cards/user-dashboard-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { StartTestComponent } from './components/start-test/start-test.component';

import {NgxPaginationModule} from 'ngx-pagination';






@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    NgxPaginationModule,


  ],
  providers:[...userDashboardServices.services,...userDashboardGuards.guards],
  declarations: [...userDashboardContainers.containers,userDashboardComponents.components, UserDashboardCardsComponent, ViewDetailsComponent, StartTestComponent],
  exports:[...userDashboardContainers.containers,...userDashboardComponents.components]
 
})
export class UserDashboardModule { }
