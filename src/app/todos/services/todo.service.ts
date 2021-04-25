import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>("https://jsonplaceholder.typicode.com/todos");
    // return this.http.get<Array<Todo>>("http://localhost:4200/assets/todos.json");
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo);
  }

  removeTodo(todoId: number): Observable<any> {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    console.log("update")
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
  }
}
