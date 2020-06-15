import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    public UserName:any;
    public Password:any;

    
    constructor(private appService:AppService,private router:Router) {}
    ngOnInit() {}

    

    public loginFunction=()=>{
      console.log("Inside login Function")
        if(!this.UserName){
          alert("Email Missing")
        }else if(!this.Password){
          alert("Password Missing")
        }else{
           let data={
             email:this.UserName,
             password:this.Password
           }
          this.appService.loginFunction(data).subscribe((apiResponse)=>{
          
            if(apiResponse.status===200){


              console.log(apiResponse.data);
              Cookie.deleteAll;
              Cookie.set('authToken',apiResponse.data.authToken);
              Cookie.set('userId',apiResponse.data.userDetails.userId);
              Cookie.set('userName',apiResponse.data.userDetails.firstName+ ' ' +apiResponse.data.userDetails.lastName);
              Cookie.set('role',apiResponse.data.role);
              alert("Login Successfull...")

              

              setTimeout(()=>{
                this.router.navigate(['/user-dashboard'])
              },1000)
            }else if(apiResponse.status===869){

              
              
              console.log(apiResponse);
              Cookie.set('authToken',apiResponse.data.authToken);
              Cookie.set('userId',apiResponse.data.userDetails.userId);
              Cookie.set('userName',apiResponse.data.userDetails.firstName+ ' ' +apiResponse.data.userDetails.lastName);
              Cookie.set('role',apiResponse.data.role);
              alert("Login Successfull...")


              setTimeout(()=>{
                this.router.navigate(['/dashboard'])
              },1000)
            }
            else{
              alert("Some Error Occured")
            }
          },(err)=>{
            alert("Some Error occured(err)");
          });
        }
      }
}
