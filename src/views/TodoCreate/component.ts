import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import { Action } from 'vuex-class';
import TodoForm from '../../components/TodoForm/component';
import { Todo } from '../../store/modules/todos/types';

@Component({
  mixins: [Template],
  components: { TodoForm },
})
export default class TodoCreate extends Vue {
  private todo: Todo = {
    id: null,
    text: '',
    done: false,
  };
  @Action('addTodo', { namespace: 'todoModule' })
  private createTodo!: Function;

  private addTodo(todo: Todo) {
    this.createTodo(todo).then(() => {
      this.$router.push('/todos');
    });
  }
}
