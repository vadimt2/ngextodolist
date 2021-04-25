import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from '../interfaces';
import { Add, AddSuccess, LoadedSuccess, Remove, RemoveSuccess, Toggle, ToggleSuccess } from './actions';

export interface TodosState {
  todos: Array<Todo>;
}

export const initialState: TodosState = {
  todos: []
};

export const _todoReducer = createReducer(
  initialState,
  on(LoadedSuccess, (state, {todos}) => ({
    ...state,
    todos: [...state.todos, ...todos]
  })),
  on(AddSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo]
  })),
  on(RemoveSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(Toggle, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(todoInList => (todoInList.id === todo.id ? { ...todoInList, completed: !todoInList.completed } : todoInList))
  }))
);

export function todoReducer(state: TodosState | undefined, action: Action) {
  return _todoReducer(state, action);
}

export const featureKey = 'todosSliceState';