import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import vuexLocal from '@/plugins/vuex-persist';
import { RootState } from '@/store/types';
import { todoModule } from '@/store/modules/todos/index';
// import { authModule } from '@/store/modules/auth/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    appName: 'Todos',
    appVersion: '0.0.1',
  },
  modules: {
    todoModule,
    // authModule
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(store);
