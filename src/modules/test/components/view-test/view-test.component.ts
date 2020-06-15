import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.scss']
})
export class ViewTestComponent implements OnInit {

  public allTest = [];

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit() {

    this.appService.getAllTest().subscribe(
      data => {
        console.log("logging data inside view test component")
        console.log(data);
        this.allTest = data["data"];
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public deleteTest = (testId) => {
    console.log("Inside DeleteTest in component");
    this.appService.deleteTest(testId).subscribe((apiResponse) => {
      if (apiResponse.status == 200) {
        alert("Test Deleted Successfully");
        setTimeout(() => {

          this.router.navigate(['/dashboard/test/create-test']);
          
        }, 500);
      } else {
        alert("Some error Occured");
      }
    }, (err) => {
      console.log(err);
      alert("Some error Occured(err)");
    }
    );

  } // end delete test function;

}


