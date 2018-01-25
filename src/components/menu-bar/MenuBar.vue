<template>
        <v-toolbar
            color="blue-grey"
            dense
            dark
            app
            clipped-left
            fixed
        >
            <v-toolbar-side-icon @click.stop="isMinimized = !isMinimized"></v-toolbar-side-icon>
            <v-toolbar-title class="pr-2">
                Polaris
            </v-toolbar-title>
            <v-toolbar-items class='hidden-sm-and-down'>
                <template v-for="item in menuItems">
                    <v-btn flat @click="navigate(item.path)" v-bind:class="getButtonClass(item.path)" :key="item.name">{{ item.name }}</v-btn>
                </template>
                <!-- <v-btn flat @click="navigate('/')" class="">Delivery</v-btn>                     -->
                <!-- <v-btn flat href='campaigns.html' class='btn--active'>Delivery</v-btn> -->
                <!-- <v-btn flat>Network</v-btn>
                <v-menu offset-y>
                    <v-btn flat slot="activator">
                        Admin               
                        <v-icon>arrow_drop_down</v-icon>             
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="item in adminItems" :key="item.title">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu> -->
            </v-toolbar-items>
            <v-spacer></v-spacer>
           
            <v-text-field
                 light
                 solo
                 clearable
                 id="globalSearchText"
                 name="globalSearchText"
                 prepend-icon='search'
                 placeholder='Global Search'>
            </v-text-field>
            <v-tooltip bottom>
                <v-btn icon slot="activator">
                    <v-icon>account_circle</v-icon>
                </v-btn>
                <span>Logout</span>
            </v-tooltip>
       </v-toolbar>
</template>
