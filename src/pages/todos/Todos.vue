<template>
  <v-content>
        <v-container grid-list-xl>
            <v-layout row wrap text-xs-left>
                <v-flex xs12>
                    <h1 class="title">Todos</h1>
                </v-flex>
            </v-layout>
            <ul>
                <li v-for="todo in allTodos" :key="todo._id" :todo="todo">
                    <div><b>{{ todo.name }}</b></div>
                    <div>{{ todo.description }}</div>
                </li>
            </ul>

        </v-container>
  </v-content>
</template>
