<template>
<div class="view-todo">
    <h2>todo</h2>
    <ul>
        <li v-for="todo in allTodos" :key="todo._id" :todo="todo">
            <div><b>{{ todo.name }}</b></div>
            <div>{{ todo.description }}</div>
        </li>
    </ul>

</div>
</template>
