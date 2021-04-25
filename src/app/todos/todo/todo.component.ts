import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../interfaces';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Output() onRemoveTodo = new EventEmitter<number>();
  @Output() onToggleTodo = new EventEmitter<Todo>();

  @Input() todo: Todo;

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor() { }

  removeTodo() {
    this.onRemoveTodo.emit(this.todo.id);
  }

  toggleTodo() {
    this.onToggleTodo.emit(this.todo);
  }

}
