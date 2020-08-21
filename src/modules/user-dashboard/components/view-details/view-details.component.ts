import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { Router } from '@angular/router';
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'sb-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  public allTest = [];

  public currentTest;

  public currentTestId;

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

  public takeTest = (receivedTestId) => {
    // this.testId=receivedTestId;
    console.log(receivedTestId);
    this.currentTestId=receivedTestId;

    this.appService.getSingleTestInformation(receivedTestId).subscribe(
      data => {
        console.log("logging data inside component")
        console.log(data);
        this.currentTest = data["data"];
        console.log(this.currentTest);
        $("#testInstructionsModal").modal();
        $("#testInstructionsModal .duration").text(this.currentTest.testDuration)

      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }

    )
  }

  public startTest(){
    this.router.navigate(['/user-dashboard/start-test/'+this.currentTestId])
  }


  public result(testId){
    this.router.navigate(['/user-dashboard/result/' +testId]);
  }



}
