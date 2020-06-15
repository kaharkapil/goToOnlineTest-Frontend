import { TestBed } from '@angular/core/testing';

import { UserDashboardService } from './user-dashboard.service';

describe('UserDashboardService', () => {
  let service: UserDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[service],
    });
    service = TestBed.inject(UserDashboardService);
  });

  describe('getDashboard$', () => {
    it('should return Observable<Dashboard>', () => {
        service.getUserDashboard$().subscribe(response => {
            expect(response).toEqual({});
        });
    });
});

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
