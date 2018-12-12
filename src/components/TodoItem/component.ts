import { Component, Vue, Prop } from 'vue-property-decorator';
import Template from './template.vue';
import { Todo } from '@/store/modules/todos/types';
import { Action, Mutation } from 'vuex-class';

@Component({
  mixins: [Template],
})
export default class TodoItem extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  private todo!: Todo;

  @Action('updateTodoStatus', { namespace: 'todoModule' })
  private _updateTodoStatus!: Function;

  @Action('removeTodo', { namespace: 'todoModule' })
  private _removeTodo!: Function;

  @Mutation('setTodo', { namespace: 'todoModule' })
  private setTodo!: Function;

  private goToUpdateTodo() {
    this.setTodo(this.todo);
    this.$router.push(`/todos/:${this.todo.id}/update`);
  }

  private updateTodoStatus() {
    this._updateTodoStatus(this.todo);
  }

  private removeTodo() {
    this._removeTodo(this.todo.id);
  }
}
