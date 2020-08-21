import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';


/* Components*/
import * as testComponents from './components'
import { TestModule } from './test.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrolledUsersComponent } from './components/enrolled-users/enrolled-users.component';





export const ROUTES:Routes=[

  {
    path: 'create-test',
    data: {
        title: 'createTest - goToOnlineTest',
        breadcrumbs: [
            {
                text: 'Dashboard',
                active: true,
            },
        ],
    } as SBRouteData,
    canActivate: [],
    component: testComponents.CreateTestComponent
},
{
  path: 'view-test',
  data: {
      title: 'ViewTest - goToOnlineTest',
      breadcrumbs: [
          {
              text: 'Dashboard',
              active: true,
          },
      ],
  } as SBRouteData,
  canActivate: [],
  component: testComponents.ViewTestComponent
},
{
  path: 'edit-test/:testId',
  data: {
      title: 'editTest - goToOnlineTest',
      breadcrumbs: [
          {
              text: 'Dashboard',
              active: true,
          },
      ],
  } as SBRouteData,
  canActivate: [],
  component: testComponents.EditTestComponent
},

{
  path: 'question-operations',
  data: {
      title: 'goToOnlineTest',
      breadcrumbs: [
          {
              text: 'Dashboard',
              active: true,
          },
      ],
  } as SBRouteData,
  canActivate: [],
  component: testComponents.QuestionOperationComponent
},
{
    path: 'enrolled-users/:testId',
    data: {
        title: 'goToOnlineTest',
        breadcrumbs: [
            {
                text: 'Dashboard',
                active: true,
            },
        ],
    } as SBRouteData,
    canActivate: [],
    component: EnrolledUsersComponent,
  },




  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
  exports:[RouterModule],
})
export class TestRoutingModule { }
