import { Todo, TodoState } from "../../type";
import { ActionType } from "../action-types/todos";
import { TodoActionType } from "../actions/todos";

const initialState: TodoState = { todos: [] };

const todosReducer = (
  state: TodoState = initialState,
  action: TodoActionType
) => {
  switch (action.type) {
    case ActionType.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case ActionType.CREATE_TODO:
      return { ...state, todos: action.payload };

    case ActionType.UPDATE_TODO:
      const { payload } = action;
      return state.todos.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              title: todo.title,
              desc: todo.desc,
              isComplete: todo.isComplete,
            }
          : todo
      );

    case ActionType.TOGGLE_TODO:
      return state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: action.payload.isComplete ? true : false }
          : todo
      );

    case ActionType.DELETE_TODO:
      return state.todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todosReducer;
