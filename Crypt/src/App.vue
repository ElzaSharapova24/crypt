<script setup>
import ComponentHeader from "@/components/ComponentHeader.vue";
</script>

<template>
    <header>
        <component-header/>
    </header>
    <router-view :key="$route.fullPath"></router-view>
</template>

<style scoped>
</style>
