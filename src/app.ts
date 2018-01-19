import "./polyfill";
import "./localisation";

import Vue from "vue";
import { Component } from "vue-typed";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import * as Logger from "js-logger";

import { mapGetters, mapActions } from "vuex";

let Config = require("./config.json");

import store from "./store";

import Navbar from "./components/navbar";
import Foot from "./components/foot";

import { router } from "./routes";

import "./style.scss";
let template = require("./App.vue");

Vue.use(Vuetify);
Vue.use(VueRouter);

let logLevel = (Config.debug ? Logger.DEBUG : Logger.ERROR);

Logger.useDefaults();
Logger.setLevel(logLevel);

Vue.config.errorHandler = function (err, vm, info) {
    Logger.error("Vue error: ", err);
};

@Component({
    mixins: [template],
    store,
    components: {
        Navbar,
        Foot
    },
    router: router
})
class App extends Vue {
    data: () => ({
        drawer: true,
        miniDrawer: true,
        adminItems: [
            { title: "Home", icon: "dashboard" },
            { title: "About", icon: "question_answer" }
        ],
        navbarItems: [
            {
                action: "card_giftcard",
                title: "Campaigns",
                href: "campaigns.html",
                active: true,
                items: [
                    { title: "My Campaigns", href: "campaigns.html", active: true },
                    { title: "Delivering", href: "campaigns.html" },
                    { title: "Starting Soon", href: "campaigns.html" },
                    { title: "Ending Soon", href: "campaigns.html" },
                    { title: "Draft", href: "campaigns.html" },
                    { title: "Archived", href: "campaigns.html" }
                ]
            },
            {
                action: "list",
                title: "Line Items",
                href: "line_items.html",
                items: [
                    { title: "My Line Items", href: "line_items.html" },
                    { title: "Delivering", href: "line_items.html" },
                    { title: "Starting Soon", href: "line_items.html" },
                    { title: "Ending Soon", href: "line_items.html" },
                    { title: "Draft", href: "line_items.html" },
                    { title: "Archived", href: "line_items.html" }
                ]
            },
            {
                action: "web_asset",
                title: "Creatives",
                href: "creatives.html",
                items: [
                    { title: "My Creatives", href: "creatives.html" },
                    { title: "Delivering", href: "creatives.html" },
                    { title: "Starting Soon", href: "creatives.html" },
                    { title: "Ending Soon", href: "creatives.html" },
                    { title: "Draft", href: "creatives.html" },
                    { title: "Archived", href: "creatives.html" }
                ]
            },
            {
                action: "insert_photo",
                title: "Assets",
                href: "assets.html",
                items: [
                    { title: "All Assets", href: "assets.html" },
                    { title: "Images", href: "assets.html" },
                    { title: "Videos", href: "assets.html" },
                    { title: "iFrames", href: "assets.html" },
                    { title: "Audios", href: "assets.html" },
                    { title: "Shoppers", href: "assets.html" },
                    { title: "Archived", href: "assets.html" }
                ]
            },
            {
                action: "library_books",
                title: "Content",
                href: "content.html",
                items: [{ title: "All Content", href: "content.html" }]
            }
        ]
    }),
    mounted() {
        Logger.log("mounted, store = ", store);
    },
}

window.onerror = function (errorMsg, url, lineNo, colNo, error) {
    Logger.error("Global event: ", errorMsg);
};

export const app = new App().$mount("#app");
