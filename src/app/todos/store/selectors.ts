import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodosState, featureKey } from "./reducer";

export interface AppState {
    todosSliceState: TodosState;
  }
  
  export const selectTodosSliceState = createFeatureSelector<AppState, TodosState>(featureKey);
   
  export const selectTodos = createSelector(
    selectTodosSliceState,
    (state: TodosState) => state.todos
  );