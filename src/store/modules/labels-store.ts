import axios from "axios";
import { FETCH_LABELS, GET_LABELS, SET_LABELS } from "../types";
import { API_URL, LABELS_PATH } from "../constants";

const url = API_URL + LABELS_PATH;

const state = {
    labels: []
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
        return axios.get(url)
            .then((response) =>
            commit(SET_LABELS, response.data)
        );
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};