<template>
    <button @click="counter++">
        Button {{counter}}
    </button>
</template>

<script setup>
import {ref} from "vue";
const counter = ref(0);
</script>

<style lang="css" scoped>

</style>