import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import {
    LoadTodos,
  LoadedSuccess,
  Failure,
  Remove,
  Add,
  RemoveSuccess,
  AddSuccess,
  Toggle,
  ToggleSuccess
} from './actions';
import { TodoService } from '../services/todo.service';
 
@Injectable()
export class TodoEffects {
  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadTodos),
      exhaustMap(action =>
        this.todoService.getTodos().pipe(
          map(todos => LoadedSuccess({ todos })),
          catchError(error => of(Failure({ error })))
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Add),
    exhaustMap(action =>
      this.todoService.addTodo(action.todo).pipe(
        map(todo => AddSuccess({ todo })),
        catchError(error => of(Failure({ error })))
      )
    )
  )
);

updateTodo$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Toggle),
    exhaustMap(action =>
      this.todoService.updateTodo(action.todo).pipe(
        map(todo => ToggleSuccess({ todo })),
        catchError(error => of(Failure({ error })))
      )
    )
  )
);

removeTodo$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(Remove),
    switchMap((action) => {
      return this.todoService.removeTodo(action.id).pipe(
        map((data) => {
          return RemoveSuccess({ id: action.id });
        }),
        catchError(error => of(Failure({ error })))
      );
    })
  );
});

 
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}