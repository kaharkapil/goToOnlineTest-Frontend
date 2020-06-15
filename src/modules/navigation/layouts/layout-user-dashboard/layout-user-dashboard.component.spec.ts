import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUserDashboardComponent } from './layout-user-dashboard.component';
import { Component, DebugElement, ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavigationService } from '@modules/navigation/services';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  template: `
      <sb-layout-user-dashboard
          [someInput]="someInput"
          (someFunction)="someFunction($event)"
      ></sb-layout-dashboard>
  `,
})
class TestHostComponent {
  // someInput = 1;
  // someFunction(event: Event) {}
}


describe('LayoutUserDashboardComponent', () => {
  
  let fixture: ComponentFixture<TestHostComponent>;

  let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: LayoutUserDashboardComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let navigationService: NavigationService;


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, LayoutUserDashboardComponent ],
      imports: [NoopAnimationsModule],
            providers: [
                { provide: NavigationService, },
                ChangeDetectorRef,
            ],
            schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        navigationService = TestBed.inject(NavigationService);

        fixture.detectChanges();
  }));

  it('should display the component', () => {
    expect(hostComponentNE.querySelector('layout-user-dashboard')).toEqual(jasmine.anything());
});

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LayoutUserDashboardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
