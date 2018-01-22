<template>
        <v-toolbar
            color="blue-grey"
            dark
            app
            clipped-left
            fixed
        >
            <v-toolbar-side-icon @click.stop="isMinimized = !isMinimized"></v-toolbar-side-icon>
            <v-toolbar-title class="pr-2">
                <!-- <v-avatar>
                    <img src="static/pol-logo-01.png" alt="polaris-avatar" />
                </v-avatar> -->
                Polaris
            </v-toolbar-title>
            <v-toolbar-items class='hidden-sm-and-down'>
                <v-btn flat href='campaigns.html' class='btn--active'>Delivery</v-btn>
                <v-btn flat href='reports.html'>Reports</v-btn>
                <v-btn flat href='network.html'>Network</v-btn>
                <v-menu offset-y>
                    <v-btn flat href='admin.html' slot="activator">
                        Admin               
                        <v-icon>arrow_drop_down</v-icon>             
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="item in adminItems" :key="item.title">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-text-field
                 light
                 solo
                 prepend-icon='search'
                 placeholder='Search...'>
            </v-text-field>
            <v-tooltip bottom>
                <v-btn icon slot="activator">
                    <v-icon>account_circle</v-icon>
                </v-btn>
                <span>Logout</span>
            </v-tooltip>
       </v-toolbar>
</template>
