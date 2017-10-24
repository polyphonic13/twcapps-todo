<template>
<div class="label-list">
    <h2>labels</h2>
    <ul>
        <li v-for="record in allLabels" :key="record._id" :record="record">
            <div class="label-tag" v-bind:style="getLabelStyle(record)">{{ record.name }}</div>
        </li>
    </ul>
</div>
</template>
