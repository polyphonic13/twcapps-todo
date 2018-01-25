import Vue from "vue";

import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

let template = require("./NotFound.vue");

@Component({
    mixins: [template],
})
export default class NotFound extends Vue {

}