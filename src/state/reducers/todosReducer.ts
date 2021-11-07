import { ITodo } from "../../type";
import { ActionType } from "../action-types/todos";
import { TodoActionType } from "../actions/todos";

const initialState: ITodo[] = [];

const todosReducer = (state = initialState, action: TodoActionType) => {
  switch (action.type) {
    case ActionType.CREATE_TODO:
      return [...state, action.payload];

    case ActionType.UPDATE_TODO:
      const { payload } = action;
      return state.map((todo) =>
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
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: action.payload.isComplete }
          : todo
      );

    case ActionType.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    case ActionType.FETCH_ALL_TODOS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default todosReducer;
