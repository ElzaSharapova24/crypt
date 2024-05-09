<template>
    <div class="table">
        <button class="table__title btn-reset">
            <router-link class="table__title" to="/history">
                История переводов
            </router-link>
        </button>
        <header-translation-table/>
        <translation-table-item v-for="transaction in filteredTransactions.slice(0,10)" v-bind="transaction" :key="transaction.date"/>
    </div>
</template>

<script>
import HeaderTranslationTable from "@/components/HeaderTranslationTable.vue";
import TranslationTableItem from "@/components/TranslationTableItem.vue";
export default {
    name: "TranslationTable",
    props: ['transactions'],
    computed: {
        filteredTransactions: function () {
            const sort = (a,b) => a.date > b.date ? -1 : 1;
            return this.transactions.sort((a, b) => sort(a,b))
        }
    },
    components: {TranslationTableItem, HeaderTranslationTable}
}
</script>

<style scoped>

</style>
