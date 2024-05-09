<template>
    <ul class="card__list list-reset">
        <account-list-item v-for="account in accounts" v-bind="account" :key="account.account"/>
    </ul>
</template>

<script>
import AccountListItem from "@/components/AccountListItem.vue";
export default {
    name: "AccountList",
    props: ['accounts'],
    components: {AccountListItem}
}
</script>

<style scoped>

</style>
