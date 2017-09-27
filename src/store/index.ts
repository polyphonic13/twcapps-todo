import Vue from "vue";
import Vuex from "vuex";

import Labels from "./modules/labels-store";
import Todos from "./modules/todos-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Labels,
    Todos,
  }
  // strict: true
});