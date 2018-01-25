import axios, { AxiosError, AxiosResponse } from "axios";

import VueRouter, { RouteConfig } from "vue-router";
import Pages from "./pages";

const Config: RoutesData = require("./config.json");

class RoutesData {
    routes: RouteData[];
}
class RouteData {
    name: string;
    path: string;
    component: string;
}

let routes: RouteConfig[] = [];

Config.routes.forEach((route) => {
    routes.push({
        path: route.path,
        name: route.name,
        component: Pages[route.component]
    });
});

// export const routes = [
//     {
//         path: "/",
//         name: " ",
//         component: Pages.Home
//     },
//     {
//         path: "/sites",
//         name: "sites",
//         component: Pages.Sites
//     },
//     {
//         path: "/todos",
//         name: "todos",
//         component: Pages.Todos
//     },
//     {
//         path: "*",
//         component: Pages.NotFound
//     }
// ];

export const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active"
});