import { GetterTree } from 'vuex';
import { Todo, TodoState } from '@/store/modules/todos/types';
import { RootState } from '@/store/types';

type TodoGetter = GetterTree<TodoState, RootState>;

export const getters: TodoGetter = {
  done(state: TodoState): Todo[] {
    const { todos } = state;
    return todos.filter((todo: Todo) => todo.done);
  },
  pending(state: TodoState): Todo[] {
    const { todos } = state;
    return todos.filter((todo: Todo) => !todo.done);
  },
};
