import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@app/app.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName;
  public lastName;
  public email;
  public mobileNumber;
  public password;

  constructor(private router:Router,private appSerice:AppService) { }

  ngOnInit(): void {
  }
 

  public signUpFunction=()=>{
    if(!this.firstName){
      alert("firstName Missing")
    }else if(!this.lastName){
      alert("lastName Missing")
    }else if(!this.email){
      alert("email Missing")

    } else if(!this.password){
      alert("password Missing")
    }else{
      let data={
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        mobileNumber:this.mobileNumber,
        password:this.password
      }

      this.appSerice.signUpFunction(data).subscribe((apiResponse)=>{
        if(apiResponse.status===200){
          alert("signUp Successfull...!!!")
          setTimeout(()=>{
            this.router.navigate(['/home/login'])
          })
        }else{
          alert("Some Error Occured")
        }
      },(error)=>{
        alert("Some error occured"+error)
      })
    }
  }


}
