import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

import "./label-list.scss";

const template = require("./label-list.vue");

@Component({
  mixins: [template],
  components: {
  }
})
export default class LabelList extends Vue {
}
