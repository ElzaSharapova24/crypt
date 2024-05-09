<template>
    <div class="container">
        <balance-history-header v-if="data.payload" v-bind:account="data.payload.account"/>
        <balance-chart v-bind:transactions="transactions"/>
        <balance-chart v-bind:transactions="transactions" v-bind:separate-income-and-expense="true"/>
        <translation-table v-bind:transactions="transactions"/>
    </div>
</template>

<script>
import BalanceChart from "@/components/BalanceChart.vue";
import TranslationTable from "@/components/TranslationTable.vue";
import {Api} from "@/helpers/Api";
import BalanceHistoryHeader from "@/components/BalanceHistoryHeader.vue";
export default {
    name: "BalanceHistory",
    data() {
        return {
            data: {},
        }
    },
    computed: {
        transactions: function () {
            return this.data.payload
                ? this.data.payload.transactions
                : [];
        }
    },
    methods: {
        loadData() {
            Api
                .getAccount(this.$route.params.id)
                .then(data => {
                    this.data = data;
                });
        }
    },
    mounted() {
        this.loadData();
    },
    components: {BalanceHistoryHeader, TranslationTable, BalanceChart}
}
</script>

<style scoped>

</style>
