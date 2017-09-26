import axios, { AxiosError, AxiosResponse } from "axios";

import VueRouter from "vue-router";
import * as Logger from "js-logger";
import Home from "./layouts/home";
import TodoList from "./layouts/todos/";
import LabelList from "./layouts/labels/";
import NotFound from "./layouts/not-found";

export const routes = [
  {
    path: "/",
    name: " ",
    component: Home
  },
  {
    path: "/todos",
    name: "todos",
    component: TodoList
  },
  {
    path: "/labels",
    name: "labels",
    component: LabelList
  },
  {
    path: "*",
    component: NotFound
  }
];

export const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active"
});