import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { v1 as uuidv1 } from "uuid";
import { fetchTodos } from "../../api";
import { Todo, TodoState } from "../../type";
import { ActionType } from "../action-types/todos";
import {
  CreateTodoActionType,
  DeleteTodoActionType,
  SelectTodoActionType,
  SetTodosActionType,
  ToggleTodoActionType,
  UpdateTodoActionType,
} from "../actions/todos";

export const createTodoActionCreator = (todo: Todo): CreateTodoActionType => {
  return {
    type: ActionType.CREATE_TODO,
    payload: {
      id: uuidv1(),
      title: todo.title,
      desc: todo.desc,
      isComplete: todo.isComplete,
    },
  };
};

export const updateTodoActionCreator = (todo: Todo): UpdateTodoActionType => {
  return {
    type: ActionType.UPDATE_TODO,
    payload: {
      id: todo.id,
      title: todo.title,
      desc: todo.desc,
      isComplete: todo.isComplete,
    },
  };
};

export const deleteTodoActionCreator = (id: string): DeleteTodoActionType => {
  return {
    type: ActionType.DELETE_TODO,
    payload: { id },
  };
};

export const selectTodoActionCreator = (id: string): SelectTodoActionType => {
  return {
    type: ActionType.SELECT_TODO,
    payload: { id },
  };
};

export const toggleTodoActionCreator = (todo: Todo): ToggleTodoActionType => {
  return {
    type: ActionType.TOGGLE_TODO,
    payload: { id: todo.id, isComplete: todo.isComplete ? true : false },
  };
};

export const fetchAllTodoActionsCreator =
  (): ThunkAction<void, TodoState, unknown, Action<string>> | Error =>
  async (dispatch: Dispatch) => {
    try {
      const todos: Todo[] = await fetchTodos();
      dispatch(setTodos(todos));
    } catch (error) {
      console.log(error);
    }
  };

const setTodos = (todos: Todo[]): SetTodosActionType => ({
  type: ActionType.SET_TODOS,
  payload: todos,
});
