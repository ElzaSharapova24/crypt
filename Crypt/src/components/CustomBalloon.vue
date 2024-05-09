<template>
    <h1 class="balloon">
        Coin.
    </h1>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        default: '',
    },
});

defineEmits(['update:modelValue']);
</script>

<style>
    .balloon {
        font-weight: 500;
        font-size: 34px;
        padding-left: 3px;
        color: var(--primary-color);
        padding-top: 3px;
    }
</style>
