import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import { Action, Getter } from 'vuex-class';
import TodoList from '@/components/TodoList/component';

@Component({
  mixins: [Template],
  components: {
    TodoList,
  },
})
export default class Todos extends Vue {
  @Action('fetchTodos', { namespace: 'todoModule' })
  private fetchTodos!: Function;

  @Getter('done', { namespace: 'todoModule' })
  private done!: Function;

  @Getter('pending', { namespace: 'todoModule' })
  private pending!: Function;

  public mounted() {
    this.fetchTodos();
  }
}
