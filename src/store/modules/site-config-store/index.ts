import { getters } from "./getters";
import { mutations } from "./mutations";

import { SiteConfig } from "../../../models/site-config";

const data = require("../../../config.json");
const config: SiteConfig = data as SiteConfig;

const state = {
    config: config
};

export default {
    state,
    getters,
    mutations,
};