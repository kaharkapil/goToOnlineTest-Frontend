import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[service],
    });
    service = TestBed.inject(HomeService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  describe('getAuth$', () => {
    it('should return Observable<Auth>', () => {
        service.getAuth$().subscribe(response => {
            expect(response).toEqual({});
        });
    });
});
});
