import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { EditTestComponent } from './components/edit-test/edit-test.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTestComponent } from './components/view-test/view-test.component';
import { Router, RouterModule } from '@angular/router';
import { QuestionOperationComponent } from './components/question-operation/question-operation.component';



@NgModule({
  declarations: [CreateTestComponent, EditTestComponent, ViewTestComponent, QuestionOperationComponent,],
  imports: [
    CommonModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class TestModule { }
