import axios from "axios";
import { FETCH_TODOS, GET_TODOS, SET_TODOS } from "../../types";
import { API_URL, TODOS_PATH } from "../../constants";

const url = API_URL + TODOS_PATH;

export const actions = {
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

