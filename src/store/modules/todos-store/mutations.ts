import { SET_TODOS } from "../../Types";

export const mutations = {
    [SET_TODOS](state, payload) {
        state.todos = payload;
    }
};

