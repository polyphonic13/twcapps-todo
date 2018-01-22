import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

let template = require("./SideBar.vue");

@Component({
    mixins: [template],
})
export default class SideBar extends Vue {

    collapsed: boolean = true;

    data() {
        return {
            me: "me",
            isLoggedIn: "loggedIn",
            drawer: false,

            sideBarItems: [
                {
                    action: "web",
                    title: "Sites",
                    href: "sites.html",
                    items: [
                        { title: "All Sites", href: "sites.html" }
                    ]
                },
                {
                    action: "view_quilt",
                    title: "Slot Sets",
                    href: "slot_sets.html",
                    items: [
                        { title: "All Slot Sets", href: "slot_sets.html" }
                    ]
                },
                {
                    action: "picture_in_picture_alt",
                    title: "Slots",
                    href: "slots.html",
                    items: [
                        { title: "All Slots", href: "slots.html" }
                    ]
                },
                {
                    action: "dns",
                    title: "Networks",
                    href: "network.html",
                    items: [
                        { title: "All Networks", href: "network.html" }
                    ]
                }
            ]
        };
    }


    collapse() {
        this.collapsed = !this.collapsed;
    }

    onClickLogin() {
        this.$store.commit("OPEN_DIALOG", "LoginModal", {});
    }

    // ...mapActions({
    //   getAccount: 'getAccount'
    // })

    created() {
        Logger.info("SideBar/created");
    }
}