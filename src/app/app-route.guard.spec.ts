import { TestBed } from '@angular/core/testing';

import { AppRouteGuard } from './app-route.guard';

describe('AppRouteGuard', () => {
  let guard: AppRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
