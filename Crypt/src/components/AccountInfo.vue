<template>
    <div class="container">
        <div class="account__info">
            <div class="account__number">
                № {{account}}
            </div>
            <div class="account__info-price">
                <div class="account__balance">
                    Баланс
                </div>
                <span class="account__price">
                    {{balance}} ₽
             </span>
            </div>
        </div>
        <div class="account__wrapper">
            <transfer-form/>
            <balance-chart v-bind:transactions="transactions" v-bind:month-number="6"/>
        </div>
        <translation-table v-bind:transactions="transactions"/>
    </div>
</template>

<script>
import TransferForm from "@/components/TransferForm.vue";
import BalanceChart from "@/components/BalanceChart.vue";
import TranslationTable from "@/components/TranslationTable.vue";
export default {
    props: ['account', 'balance', 'mine', 'transactions'],
    name: "AccountInfo",
    components: {TranslationTable, BalanceChart, TransferForm}
}
</script>

<style scoped>

</style>
