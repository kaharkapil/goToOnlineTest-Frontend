import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {

  public testName: any;
  public testDescription: any;
  public testDuration: any;
  public testInstructions: any;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }


  public createTest = () => {
    console.log("Inside Create Test function");

    if (!this.testName) {
      alert("Enter Test Name");

    } else if (!this.testDuration) {
      alert("Enter Test Duration:");

    } else if (!this.testDescription) {
      alert("Enter Test Description:");

    } else {
      let data = {
        testName: this.testName,
        testDescription: this.testDescription,
        testDuration: this.testDuration,
        testInstructions: this.testInstructions,
      }

      this.appService.createTest(data).subscribe((apiResponse) => {
        
        if (apiResponse.status == 200) {
          alert("Test created successfully");

          setTimeout(() => {
            this.router.navigate(['/dashboard']);

          }, 1000);

        } else {
          alert("Some Err Occured");
        }
        
      }, (err) => {
        alert("Some Err Occured(err)")
      });

    }


  }
}
