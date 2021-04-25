import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './store/reducer';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveComponentModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatTooltipModule,
    StoreModule.forFeature(fromTodos.featureKey, fromTodos.todoReducer),
    // EffectsModule.forFeature([TodoEffects])
  ],
  declarations: [
    TodoListComponent,
    TodoComponent,
    AddTodoComponent
  ],
  exports: [
    TodoListComponent
  ],
  providers: [
    // TodoService
  //   TodoEffects
  //   ,
  // {
  //   provide: USER_PROVIDED_EFFECTS,
  //   multi: true,
  //   useValue: [TodoEffects],
  // },
  ]

})
export class TodoModule { }
