import axios from "axios";
import { FETCH_TODOS, GET_TODOS, SET_TODOS } from "../types";
import { API_URL, TODOS_PATH } from "../constants";

import Todo from "../../models/todo";

const url = API_URL + TODOS_PATH;

const state = {
    todos: new Array<Todo>()
};

const getters = {
    [GET_TODOS]: state => state.todos
};

const mutations = {
    [SET_TODOS](state, payload) {
        state.todos = payload;
    }
};

const actions = {
    [FETCH_TODOS]({ commit }) {
        return new Promise((resolve) => {
            axios.get(url)
                .then((response) => {
                    console.log("axios response = ", response.data);
                    if (!response.data.success) {
                        return new Error(response.data.message);
                    }
                    commit(SET_TODOS, response.data.data);
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