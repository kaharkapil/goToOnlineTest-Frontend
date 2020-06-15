import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

 /* components*/
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';



/* Containers */
import * as homeContainers from './containers';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [HomeComponent, ...homeContainers.containers, SignupComponent,ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports:[HomeComponent,...homeContainers.containers],
})
export class HomeModule { }
