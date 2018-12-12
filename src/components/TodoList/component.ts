import { Component, Prop, Vue } from 'vue-property-decorator';
// import { Action } from 'vuex-class';
import Template from './template.vue';
// import { Validator } from 'vee-validate';
import { Todo } from '@/store/modules/todos/types';
import TodoItem from '@/components/TodoItem/component';

@Component({
  mixins: [Template],
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  public todos!: Todo[];
  // @Action('updateTodoStatus', { namespace })
  // public updateTodoStatus!: Function;
  // @Action('deleteTodo', { namespace })
  // public deleteTodo!: Function;

  // public fields: Array<{ key: string; label: string; sortable?: boolean }> = [
  //   { key: 'text', label: 'Todo', sortable: true },
  //   { key: 'done', label: 'Estado' },
  //   { key: 'actions', label: 'Actions' },
  // ];
}
