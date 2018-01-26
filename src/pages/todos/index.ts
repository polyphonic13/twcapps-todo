import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { Component, Prop } from "vue-typed";

import * as types from "../../store/Types";
import * as filterTypes from "../../store/modules/todos-store/TodoFilters";

import * as Logger from "js-logger";

import Todo from "../../models/Todo";

const template = require("./Todos.vue");

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
export default class Todos extends Vue {
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