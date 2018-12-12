import { MutationTree } from 'vuex';
import { Todo, TodoState } from './types';

type TodoMutationsTree = MutationTree<TodoState>;

export const mutations: TodoMutationsTree = {
  setTodos(state: TodoState, todos: Todo[]) {
    state.todos = todos;
  },
  setTodo(state: TodoState, todo: Todo) {
    state.selectedTodo = todo;
  },
  updateTodoStatus(state: TodoState, payload: Todo) {
    const todo = state.todos.find((t: Todo) => t.id === payload.id);
    if (todo) {
      todo.done = !todo.done;
    }
  },
  todosError(state: TodoState, payload: string) {
    state.error = true;
    state.errorMessage = payload;
    state.todos = [];
  },
};
