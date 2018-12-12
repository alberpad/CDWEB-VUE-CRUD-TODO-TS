<template>
  <div id="app">
      <b-container>
        <b-nav tabs>
          <b-nav-item exact to="/todos">Listado de todos</b-nav-item>
          <b-nav-item exact to="/todos/create">Formulario de alta de todos</b-nav-item>
        </b-nav>
        <router-view/>
      </b-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
//import { State } from 'vuex-class';
//import AuthMixin from '@/mixins/AuthMixin';

@Component({
  //mixins: [AuthMixin]
})
export default class App extends Vue {
  // @State('isLogged', {namespace: 'authModule'}) isLogged !: boolean;
  // public currentPath: string = '/';
  // @Watch('$route.path', {immediate: true})
  // changeRoute(path: string): void {
  //   this.currentPath= path;
  //   console.log(this.currentPath);
  // }

}
</script>