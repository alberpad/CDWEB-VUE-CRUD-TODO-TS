import Vue from 'vue';
import { ActionContext, ActionTree } from 'vuex';
import { TodoState, Todo } from '@/store/modules/todos/types';
import { RootState } from '../../types';
import { AxiosResponse, AxiosPromise } from 'axios';

type TodoActionContext = ActionContext<TodoState, RootState>;
type TodoActionTree = ActionTree<TodoState, RootState>;

export const actions: TodoActionTree = {
  // async fetchTodos(context: TodoActionContext): Promise<any> {
  async fetchTodos({ commit }) {
    try {
      // const response: AxiosResponse = await Vue.axios({
      //   url: '/todos',
      // });
      // const payload: Todo[] = response && response.data;
      // context.commit('setTodos', payload);
      const { data } = await Vue.axios({
        url: '/todos',
      });
      commit('setTodos', data);
    } catch (e) {
      // context.commit('todosError', e.message);
      commit('todosError', e.message);
    } finally {
      console.log('Petición para obtener todos finalizada');
    }
  },
  async addTodo({ commit }, todo: Todo) {
    try {
      await Vue.axios({
        method: 'POST',
        url: '/todos',
        data: {
          id: Date.now(),
          text: todo.text,
          done: false,
        },
      });
    } catch (e) {
      commit('todosError', e.message);
    } finally {
      console.log('Petición para crear un Todo finalizada');
    }
  },
  async updateTodo({ commit }, todo: Todo) {
    try {
      await Vue.axios({
        method: 'PUT',
        url: `/todos/${todo.id}`,
        data: {
          id: todo.id,
          text: todo.text,
          done: todo.done,
        },
      });
    } catch (e) {
      commit('todosError', e.message);
    } finally {
      console.log('Petición para actualizar un Todo finalizada');
    }
  },
  async updateTodoStatus({ commit, dispatch }, todo: Todo) {
    try {
      await Vue.axios({
        method: 'PUT',
        url: `/todos/${todo.id}`,
        data: {
          id: todo.id,
          text: todo.text,
          done: !todo.done,
        },
      });

      dispatch('fetchTodos');
    } catch (e) {
      commit('todosError', e.message);
    } finally {
      console.log('Petición para actualizar el estado de un Todo finalizada');
    }
  },

  async removeTodo({ commit, dispatch }, id) {
    try {
      await Vue.axios({
        method: 'DELETE',
        url: `/todos/${id}`,
      });
      // Como eliminamos desde la página donde se muestran los Todos
      // Hacemos un dispatch para refrescar sin tener que actualizar la página
      dispatch('fetchTodos');
    } catch (e) {
      commit('todosError', e.message);
    } finally {
      console.log('Petición para eliminar un Todo finalizada');
    }
  },
};
