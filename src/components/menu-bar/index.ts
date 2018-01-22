import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

let template = require("./MenuBar.vue");
let config = require("../../config.json");

@Component({
    mixins: [template],
})
export default class MenuBar extends Vue {
    version: string = `${config.version}`;
    build: string = `${config.build}`;

    data() {
        return {
            // nav
            isMinimized: false,
            adminItems: [
                { title: "Home", icon: "dashboard" },
                { title: "About", icon: "question_answer" }
            ]

        };
    }
}