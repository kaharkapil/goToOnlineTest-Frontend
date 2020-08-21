import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url='http://localhost:3000';

  public email;

  

  constructor(public http:HttpClient) { 
    
  }

  public addQuestionFunction(data): Observable<any>{
    
    const params=new HttpParams()
    .set('question',data.question)
    .set('optionA',data.optionA)
    .set('optionB',data.optionB)
    .set('optionC',data.optionC)
    .set('optionD',data.optionD)
    .set('answer',data.answer)
    return this.http.post(this.url+'/api/v1/test/'+data.testId+'/question/add',params);
  }

  public viewQuestionsFunction(testId):Observable<any>{
    console.log("Inside view Question Function in testService")
    return this.http.get(this.url+'/api/v1/test/'+testId+'/question/all');
  }

  public deleteQuestion(questionId):Observable<any>{
    return this.http.post(this.url+'/api/v1/test/question/'+questionId+'/delete',null);
  }

  public getSingleQuestionInformation=(questionId):any =>{
    return this.http.get(this.url+'/api/v1/test/question/'+questionId);
  }

  public addToAttemptedUsers=(data):any=>{
    let params=new HttpParams()
      .set('email',data.email)
      .set('score',data.score)
    return this.http.post(this.url+'/api/v1/test/'+data.testId+'/addUser',params)
  }

  public addPerformance=(data):any=>{
    let params=new HttpParams()
    .set('userEmail',data.userEmail)
    .set('testId',data.testId)
    .set('score',data.score)
    .set('totalQuestions',data.totalQuestions)
    .set('timeTaken',data.timeTaken)
    .set('correctAnswers',data.correctAnswers)
    .set('skippedQues',data.skippedQues)

    return this.http.post(this.url+'/api/v1/test/addPerformance',params)
                                         
  }

  public getPerformance=(testId):any=>{
    this.email=Cookie.get('email');
   console.log(this.email)
   console.log(this.url+'/api/v1/test/result/'+this.email+'/'+testId);
   console.log(this.http.get(this.url+'/api/v1/test/result/'+this.email+'/'+testId))
   
    return this.http.get(this.url+'/api/v1/test/result/'+this.email+'/'+testId);

  }

}
