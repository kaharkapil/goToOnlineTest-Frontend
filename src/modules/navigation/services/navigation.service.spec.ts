import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
    let navigationService: NavigationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NavigationService,
                { provide: ActivatedRoute, },
                { provide: Router,},
            ],
        });
        navigationService = TestBed.inject(NavigationService);
    });

    describe('sideNavVisible$', () => {
        it('should return Observable<boolean>', () => {
            navigationService.sideNavVisible$().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
