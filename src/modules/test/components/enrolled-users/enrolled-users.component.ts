import { Component, OnInit } from '@angular/core';
import { TestService } from '@modules/test/test.service';
import { AppService } from '@app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sb-enrolled-users',
  templateUrl: './enrolled-users.component.html',
  styleUrls: ['./enrolled-users.component.css']
})
export class EnrolledUsersComponent implements OnInit {

  public currentTestId;

  public currentTest;
  public attemptedBy=[{}];


  constructor(private testService: TestService, private appService: AppService, private router: Router, private _route: ActivatedRoute,) {
  }

  ngOnInit(): void {
   this.currentTestId= this._route.snapshot.paramMap.get('testId')
    
   
   this.appService.getSingleTestInformation(this.currentTestId).subscribe(
    data => {
      console.log(data);
      this.currentTest = data["data"];
      console.log(this.currentTest.attemptedBy);
      
      this.attemptedBy=this.currentTest.attemptedBy
      console.log(this.attemptedBy)
    },
    error => {
      console.log("Some error occured");
      console.log(error.errorMessage);
    }
  )
}

  }

