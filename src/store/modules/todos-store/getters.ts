import { GET_TODOS } from "../../Types";

export const getters = {
    [GET_TODOS]: state => state.config,
};
