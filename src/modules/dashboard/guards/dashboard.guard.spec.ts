import { TestBed } from '@angular/core/testing';

import { DashboardGuard } from './dashboard.guard';

describe('Dashboard Guards', () => {
    let dashboardGuard: DashboardGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [DashboardGuard],
        });
        dashboardGuard = TestBed.inject(DashboardGuard);
    });

    it('should be created', () => {
        expect(dashboardGuard).toBeTruthy();
      });

   
        
    });

