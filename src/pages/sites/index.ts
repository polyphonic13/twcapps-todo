import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

let template = require("./Sites.vue");

@Component({
    mixins: [template],
})
export default class Sites extends Vue {

    filterField: string = "Network";

    filterValue: string[] = ["Meredidth"];

    get filterValues(): string[] {
        let values: string[] = [];
        if (this.filterField === "Network") {
            this.filterValue = [];
            values = ["Meredith", "Zynga", "Publishers Clearing House", "Wunderdog", "Tribune", "Time Inc"];
        }
        if (this.filterField === "Status") {
            this.filterValue = [];
            values = ["active", "inactive", "archived"];
        }
        return values;
    }

    data() {
        return {
            // filters
            filterFields: ["Status", "Network", "Slot Type", "Slot Format"],
            filterMatchType: "is",
            filterMatchTypes: ["is", "is not", "contains", "does not contain"],
            filterField: "Network",
            filterValue: ["Meredith"],

            // sites table
            tableActions: ["Deactivate", "Archive"],
            tableActionDefault: undefined,

            siteTablePagination: {
                sortBy: "modified_date",
                descending: true
            },
            siteTableActions: undefined,
            siteTableHeaders: [
                { text: "ID", value: "id" },
                {
                    text: "Name",
                    align: "left",
                    value: "name"
                },
                // { text: "Domain Name", value: "domain_name" },
                { text: "Slots", value: "slots", align: "center" },
                { text: "Slot Sets", value: "slot_sets", align: "center" },
                { text: "Status", value: "status", align: "center" },
                { text: "Network", value: "network" },
                { text: "Modified", value: "modified_date" },
            ],
            siteTableItems: [
                {
                    value: false,
                    id: "12",
                    name: "BHG",
                    domain_name: "www.bhg.com",
                    slots: 3,
                    slot_sets: 5,
                    status: "active",
                    network: "Meredith",
                    modified_date: "2017-12-20"
                },
                {
                    value: false,
                    id: "13",
                    name: "Fitness",
                    domain_name: "www.fitnessmagazine.com",
                    slots: 4,
                    slot_sets: 2,
                    status: "active",
                    network: "Meredith",
                    modified_date: "2017-12-19"
                },
                {
                    value: false,
                    id: "10",
                    name: "Parents",
                    domain_name: "www.parents.com",
                    slots: 10,
                    slot_sets: 3,
                    status: "active",
                    network: "Meredith",
                    modified_date: "2017-12-17"
                },
                {
                    value: false,
                    id: "9",
                    name: "Shape",
                    domain_name: "www.shape.com",
                    slots: 15,
                    slot_sets: 2,
                    status: "active",
                    network: "Meredith",
                    modified_date: "2017-12-19"
                },
                {
                    value: false,
                    id: "20",
                    name: "AllRecipes",
                    domain_name: "www.allrecipes.com",
                    slots: 20,
                    slot_sets: 3,
                    status: "active",
                    network: "Meredith",
                    modified_date: "2017-12-19"
                },
                {
                    value: false,
                    id: "21",
                    name: "Ser Padres",
                    domain_name: "www.serpadres.com",
                    slots: 6,
                    slot_sets: 1,
                    status: "active",
                    network: "Meredith",
                    modified_date: "2017-12-10"
                },
            ]
        };
    }
}