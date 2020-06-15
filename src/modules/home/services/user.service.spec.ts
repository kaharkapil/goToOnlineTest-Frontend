import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import {User} from './../models';

// import {MockUser,User} from '@testing/mocks'


//const mockUser =new mockUser();

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[service],
    });
    service = TestBed.inject(UserService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
    
   describe('getUser$', () => {
     it('should return Observable<User>', () => {
         //service.user = mockUser;
         service.user$.subscribe(response => {
             expect(response).toEqual(service.user);
           //  expect(response).toEqual(mockUser);
         });
     });
});
  
});
