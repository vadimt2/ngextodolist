import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Todo } from '../interfaces';
import { Add, LoadTodos, Remove, Toggle } from '../store/actions';
import { AppState, selectTodos } from '../store/selectors';
import { map } from 'rxjs/operators';
import { fadeAnimation, listAnimation } from '../animations/todo-list.animation';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    fadeAnimation,
    listAnimation
  ]
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;
  currentState: string = "in";
  filteredTodo: string = "All";
  todosOptions: Array<string> = ["All","Done","Undone"]


  constructor(private store: Store<AppState>, cdRef: ChangeDetectorRef) {
    // console.log((cdRef as any)._view);
  }

  ngOnInit() {
    this.todos$ = this.store.select(selectTodos);
    this.store.dispatch(LoadTodos());
  }

  get filteredTodos() {
    if(this.filteredTodo === "Done") {
      return this.todos$.pipe(map(todos => todos.filter(x => x.completed)))
    } else if (this.filteredTodo === "Undone") {
      return this.todos$.pipe(map(todos => todos.filter(x => !x.completed) ))
    } else
    return this.todos$;
  }

  filterTodosList(option: string) {
    this.filteredTodo = option;
  }

  addTodo(title: string) {
    const todo: Todo = {
      id: 0,
      userId: 1,
      title: title,
      completed: false
    }
    this.store.dispatch(Add({ todo }));
  }

  removeTodo(id: number) {
    this.currentState = "remove"
    this.store.dispatch(Remove({ id }));
  }

  toggleTodo(todo: Todo) {
    const update: Todo = { ...todo, completed: !todo.completed};
    this.store.dispatch(Toggle({ todo: update }));
  }


}