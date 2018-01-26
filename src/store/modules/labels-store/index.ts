import axios from "axios";
import { FETCH_LABELS, GET_LABELS, SET_LABELS } from "../../Types";
import { API_URL, LABELS_PATH } from "../../Constants";

import Label from "../../../models/Label";

const url = API_URL + LABELS_PATH;

const state = {
    labels: new Array<Label>()
};

const getters = {
    [GET_LABELS]: state => state.labels
};

const mutations = {
    [SET_LABELS](state, payload) {
        state.labels = payload;
    }
};

const actions = {
    [FETCH_LABELS]({ commit }) {
        return new Promise((resolve) => {
            axios.get(url)
                .then((response) => {
                    console.log("axios response = ", response.data);
                    if (!response.data.success) {
                        return new Error(response.data.message);
                    }
                    commit(SET_LABELS, response.data.data);
                    resolve();
                });
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};