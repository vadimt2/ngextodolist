import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces';

export const LoadTodos = createAction("Todo Component] Load Todos");
export const LoadedSuccess = createAction("Todo Component] Loaded Success", props<{ todos: Array<Todo> }>());
export const Failure = createAction("Todo Component] Loaded Failure", props<{ error: string }>());
export const Add = createAction('[Todo Component] Add', props<{ todo: Todo }>());
export const AddSuccess = createAction('[Todo Component] Add Success', props<{ todo: Todo }>());
export const RemoveSuccess = createAction('[Todo Component] Remove Success', props<{ id: number }>());
export const Remove = createAction('[Todo Component] Remove', props<{ id: number }>());
export const Toggle = createAction('[Todo Component] Toggle', props<{ todo: Todo }>());
export const ToggleSuccess = createAction('[Todo Component] Toggle Success', props<{ todo: Todo }>());