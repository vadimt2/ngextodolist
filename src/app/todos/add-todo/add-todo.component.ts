import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo = new EventEmitter<string>();
  newTodo = new FormControl('', [Validators.required]);
  // newTodo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.newTodo.hasError('required')) {
      return 'Add new TODO task';
    }

    return null
  }

  addTodo() {
    if(!this.newTodo.value.trim()) {
      this.newTodo.setValue('');
      this.newTodo.markAsTouched();
      this.getErrorMessage();
      return;
    } 
      
    this.onAddTodo.emit(this.newTodo.value)
    this.newTodo.reset();
    
  }

}
