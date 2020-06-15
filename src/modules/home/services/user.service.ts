import { Injectable } from '@angular/core';

import { User}  from './../models';
import { ReplaySubject, Observable } from 'rxjs';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    this.user = {
      id: '123',
      firstName: 'Kapil',
      lastName: 'Kahar',
      email: 'no-reply@gotoonlinetest.com',
  };
   }
   set user(user:User){
     userSubject.next(user);
   }

   get user$(): Observable<User> {
    return userSubject.asObservable();
} 
}
