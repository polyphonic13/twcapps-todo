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
                <p>here is some content for the site</p>
                <v-card height="185px" flat color="secondary"> 
                    <v-card-text>
                        <div>
                            <v-btn color="primary" dark>primary</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
