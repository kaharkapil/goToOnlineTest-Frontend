import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOperationComponent } from './question-operation.component';

describe('QuestionOperationComponent', () => {
  let component: QuestionOperationComponent;
  let fixture: ComponentFixture<QuestionOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
