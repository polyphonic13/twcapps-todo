import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// root state object
const state = {
  todos: []
};

// mutations are operations that actually mutates the state.
const mutations = {
  updateTodos(state, payload) {
    state.todos = [
      {
        id: 1,
        name: "todo a",
        description: "this is the first todo"
      }
    ];

  }
};

const actions = {
  getTodos(context) {
    return new Promise((resolve) => {
      context.commit("updateTodos", {});
      resolve();
    });
  }
};

const getters = {
  getTodos: state => state.todos
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
  // strict: true
});