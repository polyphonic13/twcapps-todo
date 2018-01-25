import { SET_CONFIG } from "../../types";

export const mutations = {
    [SET_CONFIG](state, payload) {
        state.config = payload;
    }
};

