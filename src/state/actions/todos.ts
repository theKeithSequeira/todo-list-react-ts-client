import { ITodo } from "../../type";
import { ActionType } from "../action-types/todos";

export interface fetchAllTodosActionType {
  type: typeof ActionType.FETCH_ALL_TODOS;
  payload: [];
}

export interface CreateTodoActionType {
  type: typeof ActionType.CREATE_TODO;
  payload: ITodo;
}

export interface DeleteTodoActionType {
  type: typeof ActionType.DELETE_TODO;
  payload: { id: string };
}

export interface SelectTodoActionType {
  type: typeof ActionType.SELECT_TODO;
  payload: { id: string };
}
export interface ToggleTodoActionType {
  type: typeof ActionType.TOGGLE_TODO;
  payload: {
    id: string;
    isComplete: boolean;
  };
}

export interface UpdateTodoActionType {
  type: typeof ActionType.UPDATE_TODO;
  payload: ITodo;
}

export type TodoActionType =
  | ToggleTodoActionType
  | CreateTodoActionType
  | SelectTodoActionType
  | DeleteTodoActionType
  | UpdateTodoActionType
  | fetchAllTodosActionType;
