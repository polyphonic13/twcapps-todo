import Vue from "vue";
import { mapGetters } from "vuex";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

import { SET_FLAG, GET_FLAG } from "../../store/Types";
import { IS_SIDE_BAR_MINIMIZED } from "../../store/Flags";

import SideBarItem from "../../models/SideBarItem";

let template = require("./SideBar.vue");

@Component({
    mixins: [template],
    computed: {
        ...mapGetters([
            GET_FLAG
        ])
    }
})
export default class SideBar extends Vue {

    get isSideBarMinimized(): boolean {
        return this[GET_FLAG](IS_SIDE_BAR_MINIMIZED);
    }

    set isSideBarMinimized(value: boolean) {
        this.$store.commit(SET_FLAG, {
            key: IS_SIDE_BAR_MINIMIZED,
            value: value
        });
    }

    get sideBarTitle(): string {
        return "Inventory";
    }

    get sideBarItems(): SideBarItem[] {
        return [
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
            },
        ];
    }

    data() {
        return {
            me: "me",
            isLoggedIn: "loggedIn",
            drawer: true

        };
    }

    // ...mapActions({
    //   getAccount: 'getAccount'
    // })

    created() {
        Logger.info("SideBar/created");
    }
}