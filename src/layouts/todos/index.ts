import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { Component, Prop } from "vue-typed";

import * as types from "../../store/types";
import * as filterTypes from "../../store/modules/todo-filters";

import * as Logger from "js-logger";

import Todo from "../../models/todo";

import "./todo-list.scss";

const template = require("./todo-list.vue");

const filters = {
  [filterTypes.ALL]: () => true,
  [filterTypes.ACTIVE]: (todo: Todo) => !todo.isCompleted,
  [filterTypes.COMPLETE]: (todo: Todo) => todo.isCompleted
};

@Component({
  filters: filters,
  mixins: [template],
  computed: mapGetters({
    todos: types.GET_TODOS
  }),
  methods: {
    ...mapActions({
      fetchTodos: types.FETCH_TODOS
    })
  },
  components: {
  },
  mounted: () => {
    // Logger.info("TodoList component / mounted, this.fetchTodos = ", this.fetchTodos);
  },
})
export default class TodoList extends Vue {
  created() {
    // this.fetchTodos();
    Logger.info("TodoList/created, this = ", this.$store);
    this.$store.dispatch(types.FETCH_TODOS).then(() => {
      Logger.info("fetched todos");
    });
  }

  get allTodos(): Todo[] {
    return this.$store.getters[types.GET_TODOS];
  }
}
