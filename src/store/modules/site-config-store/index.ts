import { getters } from "./getters";
import { mutations } from "./mutations";

import { ISiteConfig } from "../../../interfaces/ISiteConfig";

const data = require("../../../config.json");
const config: ISiteConfig = data as ISiteConfig;

const state = {
    config: config
};

export default {
    state,
    getters,
    mutations,
};