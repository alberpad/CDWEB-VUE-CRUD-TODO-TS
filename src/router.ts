import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/todos',
    },
    {
      path: '/todos',
      name: 'todos',
      component: () =>
        import(/* webpackChunkName: "todos" */ './views/Todos/component'),
    },
    {
      path: '/todos/create',
      name: 'todo-create',
      component: () =>
        import(/* webpackChunkName: "todo-create" */ './views/TodoCreate/component'),
    },
    {
      path: '/todos/:id/update',
      name: 'todos-update',
      component: () =>
        import(/* webpackChunkName: "todos-update" */ './views/TodoUpdate/component'),
    },
  ],
});
