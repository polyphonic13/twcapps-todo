import Vue from "vue";
import Router from "vue-router";

import Pages from "../pages/";

Vue.use(Router);

let routes = [
    {
        path: "/",
        component: Pages.Home
    },
    {
        path: "todos",
        component: Pages.Todos
    },
    {
        path: "*",
        component: Pages.NotFound
    }
];

const router = new Router({
    base: __dirname,
    mode: "history",
    scrollBehavior: () => ({ y: 0, x: 0 }),
    routes: routes
});

export default {
    router
};
