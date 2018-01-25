import { SET_TODOS } from "../../types";

export const mutations = {
    [SET_TODOS](state, payload) {
        state.todos = payload;
    }
};

