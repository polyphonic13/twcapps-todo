<template>
    <v-app>
        <menu-bar></menu-bar>
        <side-bar></side-bar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                <v-tooltip right>
                    <v-btn icon large target="_blank" slot="activator">
                    <v-icon large>code</v-icon>
                    </v-btn>
                    <span>Source is here</span>
                </v-tooltip>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
