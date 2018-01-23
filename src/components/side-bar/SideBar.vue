<template>
        <v-navigation-drawer
            fixed
            clipped
            app
            hide-overlay
            width="250"
            v-model="drawer"
            :mini-variant.sync="collapsed"
        >
             <v-list dense>
                <v-list-tile>
                    <v-list-tile-action>
                        <!-- <v-icon>local_shipping</v-icon> -->
                    </v-list-tile-action>
                    <v-list-tile-content class="title">
                        Delivery
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-group v-for="item in sideBarItems" :value="item.active" v-bind:key="item.title">
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon>{{ item.action }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="body-2">
                                {{ item.title }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" dense>
                        <v-list-tile-content>
                            <v-list-tile-title class="body-2 blue-grey--text">
                                {{ subItem.title }}
                            </v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-icon>{{ subItem.action }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
            </v-list>
       </v-navigation-drawer>
</template>
