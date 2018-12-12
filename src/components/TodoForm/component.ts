import { Component, Vue, Prop } from 'vue-property-decorator';
import Template from './template.vue';
import { Todo } from '../../store/modules/todos/types';
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

@Component({
  mixins: [Template, validationMixin],
  validations: {
    todo: {
      text: {
        required,
        minLength: minLength(4),
      },
    },
  },
})
export default class TodoForm extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  private todo!: Todo;

  @Prop({
    type: String,
    default: 'Crear todo',
  })
  private todoSubmit!: String;
}
