import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardComponent } from './user-dashboard.component';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `
      <sb-dashboard [someInput]="someInput" (someFunction)="someFunction($event)"></sb-dashboard>
  `,
})

class TestHostComponent {
  // someInput = 1;
  // someFunction(event: Event) {}
}


describe('UserDashboardComponent', () => {
 
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let hostComponentDE: DebugElement;
  let hostComponentNE: Element;
  
  let component: UserDashboardComponent;
  
  let componentDE: DebugElement;
  let componentNE: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, UserDashboardComponent ],
      imports: [NoopAnimationsModule],
      providers: [],
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

    fixture.detectChanges();
  }));

  it('should display the component', () => {
    expect(hostComponentNE.querySelector('dashboard')).toEqual(jasmine.anything());
});

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UserDashboardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
