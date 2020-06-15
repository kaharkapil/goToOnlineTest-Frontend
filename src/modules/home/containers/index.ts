import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



export const containers = [LoginComponent,SignupComponent,ForgotPasswordComponent];

export * from './login/login.component';
export * from './signup/signup.component';
export * from './forgot-password/forgot-password.component'
