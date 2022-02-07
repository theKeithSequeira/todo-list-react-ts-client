export interface Todo {
  id: string;
  title: string;
  desc: string;
  isComplete: boolean;
}

export type TodoState = {
  todos: Todo[];
};
