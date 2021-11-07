export interface ITodo {
  id: string;
  title: string;
  desc: string;
  isComplete: boolean;
}

export type TodoState = {
  todos: ITodo[];
  selectedTodo: string;
};
