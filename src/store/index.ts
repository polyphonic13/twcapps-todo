import Vue from "vue";
import Vuex from "vuex";

import SiteConfig from "./modules/site-config-store/";
import Labels from "./modules/labels-store/";
import Todos from "./modules/todos-store/";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        SiteConfig,
        Labels,
        Todos,
    }
    // strict: true
});