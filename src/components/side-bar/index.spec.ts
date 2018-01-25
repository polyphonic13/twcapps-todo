import Vue from "vue";
import VueRouter from "vue-router";
import BaseButton from "./index";
import { expect } from "chai";
// import { routes } from "../../routes";

function getRenderedClassText(Component, propsData, className) {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData: propsData }).$mount();
    return vm.$el.querySelector(className).textContent;
}

const TEXT_CONTENT: string = "home items labels";

describe("SideBar.vue", () => {
    it("should render side bar links correctly", () => {
        // Vue.use(VueRouter);
        // const router = new VueRouter({
        //     routes: routes
        // });
        // expect(getRenderedClassText(BaseButton, {
        //     version: "1.0.0",
        //     build: "1",
        //     // router: router
        // }, ".navbar-header"))
        //     .to.equal(TEXT_CONTENT);
    });
});
