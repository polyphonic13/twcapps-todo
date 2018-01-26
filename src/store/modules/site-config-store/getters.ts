import { GET_CONFIG, GET_FLAG, GET_PAGE_CONFIG, GET_PAGE_FLAG } from "../../Types";
import { IFlag, IPageConfig } from "../../../interfaces/ISiteConfig";
import * as Logger from "js-logger";

export const getters = {
    [GET_CONFIG]: state => state.config,
    [GET_FLAG]: (state) => (key) => {
        // Logger.log("SiteConfig/getters [" + GET_FLAG + "], key = " + key + ", flag = ", state.config.flags[key]);
        return state.config.flags[key];
    },
    [GET_PAGE_CONFIG]: (state) => (name) => {
        let page: IPageConfig = state.config.pages.find((p) => p.name === name);
        return (!!page) ? page : undefined;
    },
    [GET_PAGE_FLAG]: (state, getters) => (name, key) => {
        return getters[GET_PAGE_CONFIG](name).flags(key);
    },
};