import Todo from "../../../models/todo";

import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state = {
    todos: new Array<Todo>()
};

export default {
    state,
    getters,
    mutations,
    actions,
};