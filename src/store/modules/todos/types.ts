export interface Todo {
  id: number | null;
  text: string;
  done: boolean;
}

export interface TodoState {
  todos: Todo[];
  selectedTodo: Todo | null;
  error: boolean;
  errorMessage: string;
}
