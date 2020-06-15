import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { map,catchError} from 'rxjs/operators';
import { Users } from '@modules/tables/models/users';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public userDetails:any;


  private url='http://localhost:3000';

  constructor(public http:HttpClient) { 
  }

  public loginFunction(data): Observable<any>{
    
    const params=new HttpParams()
    .set('email',data.email)
    .set('password',data.password)
    let apiResponse= this.http.post(`${this.url}/api/v1/users/login`,params);
    return (apiResponse);
  }
  

  public logout(): Observable<any>{
    const params =new HttpParams()
    .set('authToken',Cookie.get('authToken'))
    .set('userId',Cookie.get('userId'))
    return this.http.post(`${this.url}/api/v1/users/logout`,params)
  }
  
  public getAllUsers():Observable<any>{
    return this.http.get<Users[]>(`${this.url}/api/v1/users/all`).pipe(
      map((data:Users[])=>{
        return data;
      }),catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   
    )
  }
  public getSingleUser(userId):Observable<any>{
    return this.http.get(`${this.url}/api/v1/users/`+userId)
  }



  public createTest(data):Observable<any> {
    console.log("Inside create test in app service")
    const params=new HttpParams()
    .set('testName',data.testName)
    .set('testDescription',data.testDescription)
    .set('testDuration',data.testDuration)
    .set('testInstructions',data.testInstructions)

    return this.http.post(`${this.url}/api/v1/test/create-test`,params);
  }

  public getAllTest=()=>{
  let myResponse= this.http.get(`${this.url}/api/v1/test/view/all`);
  console.log(myResponse);
  return(myResponse);
  }

  public deleteTest(testId):Observable<any> {
    console.log("Inside Delete test in app service")
    let data=[];
    return this.http.post(this.url+'/api/v1/test/'+testId+'/delete',data);

  }// end delete test

  public getSingleTestInformation=(testId):any =>{
    return this.http.get(this.url+'/api/v1/test/view/'+testId);
  }
  
  public editTest(testId,testData):any{
    let myResponse=this.http.put(this.url + '/api/v1/test/edit/'+testId,testData);
    return myResponse;
  }
}
