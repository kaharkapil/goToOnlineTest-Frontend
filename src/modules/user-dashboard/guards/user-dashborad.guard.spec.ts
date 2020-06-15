import { TestBed } from '@angular/core/testing';

import { UserDashboradGuard } from './user-dashborad.guard';

describe('UserDashboradGuard', () => {
  let guard: UserDashboradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[guard],
    });
    guard = TestBed.inject(UserDashboradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
