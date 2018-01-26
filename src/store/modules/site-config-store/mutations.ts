import { SET_CONFIG, SET_FLAG, SET_PAGE_CONFIG, SET_PAGE_FLAG } from "../../Types";
import { ISiteConfig, IFlag } from "../../../interfaces/ISiteConfig";
import * as Logger from "js-logger";

export const mutations = {
    [SET_CONFIG](state, payload: ISiteConfig) {
        state.config = payload;
    },
    [SET_FLAG](state, payload: IFlag) {
        // Logger.log("set flag, payload = ", payload);
        state.config.flags[payload.key] = payload.value;
    }
};

