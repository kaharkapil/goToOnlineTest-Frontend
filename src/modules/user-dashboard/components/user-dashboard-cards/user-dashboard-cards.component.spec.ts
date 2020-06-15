import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardCardsComponent } from './user-dashboard-cards.component';
import { componentFactoryName } from '@angular/compiler';
import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
  import { from } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  template: `
  <sb-dashboard-cards
      [someInput]="someInput"
      (someFunction)="someFunction($event)"
  ></sb-dashboard-cards>
`,


})

class TestHostComponent{
  // someInput = 1;
    // someFunction(event: Event) {}
}


describe('UserDashboardCardsComponent', () => {

  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let hostComponentDE: DebugElement;
  let hostComponentNE: Element;
  
  let component: UserDashboardCardsComponent;
  let componentDE: DebugElement;
  let componentNE: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, UserDashboardCardsComponent ],
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
    expect(hostComponentNE.querySelector('goToOnlineTest')).toEqual(jasmine.anything());
});

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UserDashboardCardsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


});
