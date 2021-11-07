import { v1 as uuidv1 } from "uuid";
import { Dispatch } from "redux";
import { fetchTodos } from "../../api";
import { ITodo } from "../../type";
import { ActionType } from "../action-types/todos";
import { TodoActionType } from "../actions/todos";

export const createTodoActionCreator = (todo: ITodo) => {
  return (dispatch: Dispatch<TodoActionType>) => {
    dispatch({
      type: ActionType.CREATE_TODO,
      payload: {
        id: uuidv1(),
        title: todo.title,
        desc: todo.desc,
        isComplete: todo.isComplete,
      },
    });
  };
};

export const updateTodoActionCreator = (todo: ITodo) => {
  return (dispatch: Dispatch<TodoActionType>) => {
    dispatch({
      type: ActionType.UPDATE_TODO,
      payload: {
        id: todo.id,
        title: todo.title,
        desc: todo.desc,
        isComplete: todo.isComplete,
      },
    });
  };
};

export const DeleteTodoActionCreator = (id: string) => {
  return (dispatch: Dispatch<TodoActionType>) => {
    dispatch({
      type: ActionType.DELETE_TODO,
      payload: { id },
    });
  };
};

export const SelectTodoActionCreator = (id: string) => {
  return (dispatch: Dispatch<TodoActionType>) => {
    dispatch({
      type: ActionType.SELECT_TODO,
      payload: { id },
    });
  };
};

export const toggleTodoActionCreator = (todo: ITodo) => {
  return (dispatch: Dispatch<TodoActionType>) => {
    dispatch({
      type: ActionType.TOGGLE_TODO,
      payload: { id: todo.id, isComplete: todo.isComplete },
    });
  };
};

export const fetchAllTodoActionCreator = async () => {
  try {
    const data = await fetchTodos();
    return (dispatch: Dispatch<TodoActionType>) => {
      dispatch({
        type: ActionType.FETCH_ALL_TODOS,
        payload: data,
      });
    };
  } catch (error: any) {
    console.error(error.message);
  }
};
