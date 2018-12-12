import { TodoState } from './types';

export const state: TodoState = {
  todos: [],
  selectedTodo: null,
  error: false,
  errorMessage: '',
};
