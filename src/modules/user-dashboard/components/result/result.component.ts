import { Component, OnInit } from '@angular/core';
import { TestService } from '@modules/test/test.service';
import { AppService } from '@app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sb-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public currentTestId;

  public result:any

  public totalQuestions=0;
  public correct=0;
  public marks=0;
  public inCorrect=0;
  public timeTaken=0; 
        public timeTakenHr;
        public timeTakenMin;
        public timeTakenSec;
  public unanswered=0;
  public percentage;

  constructor(private testService: TestService, private appService: AppService, private router: Router, private _route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.currentTestId = this._route.snapshot.paramMap.get('testId');

    this.testService.getPerformance(this.currentTestId).subscribe( 
    apiResponse => {
      this.totalQuestions=apiResponse.data.totalQuestions;
      this.correct=apiResponse.data.correctAnswers;
      this.marks=apiResponse.data.score;
      this.unanswered=apiResponse.data.skippedQues;

      this.timeTaken=apiResponse.data.timeTaken;
      
      //Time Calculation
      if(this.timeTaken>=0&& this.timeTaken<59){
        this.timeTakenHr=0;
        this.timeTakenMin=0;
        this.timeTakenSec=this.timeTaken;
      }else if(this.timeTaken>=60&&this.timeTaken<3599){
        this.timeTakenHr=0;
        this.timeTakenMin=(this.timeTaken-(this.timeTaken%60))/60;
        this.timeTakenSec=this.timeTaken%60;
      }else{
        this.timeTakenHr=(this.timeTaken-(this.timeTaken%3600))/3600;
        this.timeTakenMin=((this.timeTaken%3600)-((this.timeTaken%3600)%60))/60;
        this.timeTakenSec=((this.timeTaken%3600)%60);     
      }
      console.log("Time taken"+this.timeTaken);
      console.log("Time TakenHr"+this.timeTakenHr);
      console.log("Time TakenMin"+this.timeTakenMin);
      console.log("Time Takensec"+this.timeTakenSec);

      if(this.timeTakenHr<10){
        this.timeTakenHr='0'+this.timeTakenHr;
      }else{
        this.timeTakenHr=this.timeTakenHr;
      }

      if(this.timeTakenMin<10){
        this.timeTakenMin='0'+this.timeTakenMin;
      }else{
        this.timeTakenMin=this.timeTakenMin;
      }

      if(this.timeTakenSec<10){
        this.timeTakenSec='0'+this.timeTakenSec;
      }else{
        this.timeTakenSec=this.timeTakenSec;
      }
      
      this.inCorrect=this.totalQuestions-this.unanswered-this.correct;
      this.percentage=((this.marks/(this.totalQuestions*2))*100).toFixed(0);

      $(".progress-bar").css({ "width": this.percentage+"%"});
   
    },
    error => {
      console.log("Somne error occured ");
      console.log(error.errorMessage);
    }
    )
  }
  }