import Vue from "vue";
import { mapGetters } from "vuex";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

import { SET_FLAG, GET_FLAG } from "../../store/Types";
import { IS_SIDE_BAR_MINIMIZED } from "../../store/Flags";

let template = require("./MenuBar.vue");
const Config = require("../../config.json");

class AdminItem {
    constructor(
        title: string,
        icon: string
    ) {}
}

@Component({
    mixins: [template],
    computed: {
        ...mapGetters([
            GET_FLAG
        ])
    }
})
export default class MenuBar extends Vue {

    get routes() {
        return this.$router.currentRoute;
    }
    get adminItems(): AdminItem[] {
        return [
            { title: "Home", icon: "dashboard" },
            { title: "About", icon: "question_answer" }
        ];
    }

    get menuItems(): Array<any> {
        return Config.routes;
    }

    data() {
        return {
            // nav
            isMinimized: false
        };
    }

    toggleSideBarMinimized() {
        let isSideBarMinimized = this[GET_FLAG](IS_SIDE_BAR_MINIMIZED);
        this.$store.commit(SET_FLAG, {
            key: IS_SIDE_BAR_MINIMIZED,
            value: !isSideBarMinimized
        });
    }

    getButtonClass(path: string): string {
        Logger.log("MenuBar/getButtonClass, path = " + path + ", router.name = " + this.$router.currentRoute.name);
        return (this.$router.currentRoute.path === path) ? "btn--active" : "";
    }

    navigate(path: string, params?: any) {
        Logger.log("MenuBar/navigate, path = " + path);
        params = params || {};
        this.$router.push({ path, params });
    }

    created() {
        Logger.info("MenuBar/created, route = ", this.$router.currentRoute);
        this.$router.afterEach((to, from) => {
            Logger.log("MenuBar/router afterEach callback, current = " + this.$router.currentRoute.path);
        });
    }

    beforeRouteUpdate() {
        Logger.log("MenuBar/beforeRouteUpdate");
    }
}