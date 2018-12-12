import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import { Action, State } from 'vuex-class';
import TodoForm from '../../components/TodoForm/component';
import { Todo } from '../../store/modules/todos/types';

@Component({
  mixins: [Template],
  components: { TodoForm },
})
export default class TodoCreate extends Vue {
  @Action('updateTodo', { namespace: 'todoModule' })
  private _updateTodo!: Function;

  @State('selectedTodo', { namespace: 'todoModule' })
  private selectedTodo!: Todo | null;

  private updateTodo(todo: Todo) {
    this._updateTodo(todo).then(() => {
      this.$router.push('/todos');
    });
  }
}
