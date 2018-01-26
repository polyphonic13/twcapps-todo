import Todo from "../../../models/Todo";

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