import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sb-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.scss']
})
export class EditTestComponent implements OnInit {

  public currentTest;
  constructor(private appService: AppService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let currentTestId = this._route.snapshot.paramMap.get('testId');
    console.log(currentTestId);
    this.appService.getSingleTestInformation(currentTestId).subscribe(
      data => {
        console.log(data);
        this.currentTest = data["data"];
        console.log("current Test is");
        console.log(this.currentTest);
      },
      error => {
        console.log("Somne error occured ");
        console.log(error.errorMessage);
      }


    )
  }// end ngOnInit();
  public editThisTest():any{
    this.appService.editTest(this.currentTest.testId,this.currentTest).subscribe(
      data=>{
        console.log(data);
                                  // this.toastr.success('BlogEdited Successfully','success..!!');
        alert("Test Editted Successfully...")
        setTimeout(()=>{
          this.router.navigate(['/dashboard/test/view-test']);
        },1000)
        
      },
      error=>{
        console.log("Some error occured ");
        alert("Some error occured ");
        console.log(error.errorMessage);
                                     //this.toastr.error('Some error occured','Error..!!');
      }
    )
  }
  
} 

