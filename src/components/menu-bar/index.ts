import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

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
})
export default class MenuBar extends Vue {
    version: string = `${Config.version}`;
    build: string = `${Config.build}`;

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

    getButtonClass(path: string): string {
        Logger.log("MenuBar/getButtonClass, path = " + path + ", router.path = " + this.$router.currentRoute.path);
        return (this.$router.currentRoute.path === path) ? "btn--active" : "";
    }

    navigate(path: string, params?: any) {
        Logger.log("MenuBar/navigate, path = " + path);
        params = params || {};
        this.$router.push({ path, params });
    }

    created() {
        Logger.info("MenuBar/created, route = ", this.$router.currentRoute);
    }

    beforeRouteUpdate() {
        Logger.log("MenuBar/beforeRouteUpdate");
    }
}