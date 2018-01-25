import { GET_TODOS, GET_PAGE_CONFIG, GET_PAGE_FLAG } from "../../types";
import { PageConfig } from "../../../models/site-config";

export const getters = {
    [GET_TODOS]: state => state.config,
    [GET_PAGE_CONFIG]: (state) => (name) => {
        let page: PageConfig = state.config.pages.find((p) => p.name === name);

        return (!!page) ? page : undefined;
    },
    [GET_PAGE_FLAG]: (state, getters) => (name, key) => {
        return getters[GET_PAGE_CONFIG](name).flags(key);
    }
};
