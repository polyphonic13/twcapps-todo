import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

import "./todo-list.scss";

const template = require("./todo-list.vue");

@Component({
  mixins: [template],
  components: {
  }
})
export default class TodoList extends Vue {
}
