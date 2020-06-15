import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import  $ from 'jquery';
import { TestService } from '@modules/test/test.service';

@Component({
  selector: 'sb-question-operation',
  templateUrl: './question-operation.component.html',
  styleUrls: ['./question-operation.component.scss']
})
export class QuestionOperationComponent implements OnInit {
  
  public allTest=[];
  public allQuestions=[];
  public testId; // for adding question to particular 
  public questionId;

  public currentQuestionData:any 
  public currentQuestionId:any;
  public currentQuestion:any;
  public currentQuestionOptionA:any;
  public currentQuestionOptionB:any;
  public currentQuestionOptionC:any;
  public currentQuestionOptionD:any;
  public currentQuestionAnswer:any;





  public question: any;
  public optionA: any;
  public optionB: any;
  public optionC: any;
  public optionD: any;
  public answer: any;


  constructor(private appService:AppService,private testService:TestService) { }

  ngOnInit(): void {
    this.appService.getAllTest().subscribe(
      data => {
        console.log("logging test inside question-operation  component");
        console.log(data);
        this.allTest = data["data"];
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }

    );

      
  }// end ngOnInit

  public getTestId(receivedTestId){
    this.testId=receivedTestId;
    console.log(this.testId);
  }

  public addQuestion=()=>{
    let data={
      testId:this.testId,
      question:this.question,
      optionA:this.optionA,
      optionB:this.optionB,
      optionC:this.optionC,
      optionD:this.optionD,
      answer:this.answer
    }
    this.testService.addQuestionFunction(data).subscribe((apiResponse)=>{
      if(apiResponse.status==200){
        alert("Question Added...!!!")
      }else{
        alert("Some Error Occured")
      }
    },(err)=>{
      alert("Some Error Occured(err)");
    })
  
  }


  public viewQuestions=(testId)=>{
    this.testService.viewQuestionsFunction(testId).subscribe((apiResponse)=> {

        console.log("logging questions inside question-operation component")
        console.log(apiResponse);
        this.allQuestions= apiResponse["data"];
        console.log(this.allQuestions);
      },(err) => {
        console.log("Some error occured while loading all questions");
        console.log(err.errorMessage);
      }


    )
  }

  public deleteQuestion=(questionId)=>{
    console.log(questionId);
    this.testService.deleteQuestion(questionId).subscribe((apiResponse)=>{
      if(apiResponse.status==200){
        alert("Question Deleted...!!!")
      }else{
        alert("Some Error Occured...!!!")
      }
    },(err)=>{
      alert("Some Error Occured(err)");
      console.log(err);
    })
  }

  public getQuestionId(receivedQuestionId){
    this.questionId=receivedQuestionId;
    console.log(this.questionId);
    this.getSingleQuestion(receivedQuestionId);
  }

  public getSingleQuestion=(questionId)=>{
    this.testService.getSingleQuestionInformation(questionId).subscribe(
      data => {
        console.log(data);
        this.currentQuestionData = data["data"];
      },
      error => {
        console.log("Somne error occured ");
        console.log(error.errorMessage);
      }

    )
    this.currentQuestionId=this.currentQuestionData.questionId;
    this.currentQuestionOptionA=this.currentQuestionData.optionA;
    this.currentQuestionOptionB=this.currentQuestionData.optionB;
    this.currentQuestionOptionC=this.currentQuestionData.optionC;
    this.currentQuestionOptionD=this.currentQuestionData.optionD;
    this.currentQuestionAnswer=this.currentQuestionData.answer;
  }







 


}
