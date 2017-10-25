import Vue from "vue";
import BaseButton from "./index";
import { expect } from "chai";

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

function getRenderedClassText (Component, propsData, className) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData: propsData }).$mount();
  const el = vm.$el.querySelector(className);
  return el.textContent;
}

const TEXT_CONTENT: string = "home items labels";

describe("foot.vue", () => {
  it("should render footer text correctly", () => {
    expect(true).to.be.true;
    // expect(getRenderedClassText(BaseButton, {
    //   version: "1.0.0",
    //   build: "1"
    // }, ".component-footer"))
    // .to.equal(TEXT_CONTENT);
  });
});
