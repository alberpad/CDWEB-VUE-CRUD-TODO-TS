import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { TodoState } from './types';
import { RootState } from '@/store/types';

export const todoModule: Module<TodoState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
