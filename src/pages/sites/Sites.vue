<template>
    <v-content>
        <v-container grid-list-xl>
            <v-layout row wrap text-xs-left>
                <v-flex xs12>
                    <h1 class="title">Sites</h1>
                </v-flex>
                <v-flex xs4>
                    <v-select
                        v-bind:items="filterFields"
                        v-model="filterField"
                        placeholder="Type to pick a field..."
                        label="Filters"
                        id="filterField"
                        name="filterField"
                        autocomplete
                    ></v-select>
                </v-flex>
                <v-flex xs2>
                    <v-select
                        v-bind:items="filterMatchTypes"
                        v-model="filterMatchType"
                        label="Match type"
                        single-line
                        bottom
                        id="filterMatchType"
                        ></v-select>
                </v-flex>
                <v-flex xs4>
                    <v-select 
                        v-model="filterValue"
                        :items="filterValues"
                        placeholder="Type to select or enter a value..."
                        single-line
                        autocomplete
                        tags
                        bottom
                        id="filterValue"
                        name="filterValue"
                    ></v-select>
                </v-flex>
                <v-flex xs2>
                    <v-btn fab small>
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab small>
                        <v-icon>remove</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
            <v-data-table
                v-bind:headers="siteTableHeaders" 
                v-bind:items="siteTableItems" 
                v-bind:pagination.sync="siteTablePagination" 
                item-key="name" 
                select-all
                class="elevation-1" 
            >
            </v-data-table>
        </v-container>
    </v-content>
</template>
