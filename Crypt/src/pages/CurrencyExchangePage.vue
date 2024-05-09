<template>
    <div class="container">
        <h3 class="title currency__title">
            Валютный обмен
        </h3>
        <div class="currency__grid">
            <currency-list v-if="userCurrencies.payload" v-bind:currencies="userCurrencies.payload"/>
            <exchange-form v-if="allCurrencies.payload" v-bind:currencies="allCurrencies.payload"/>
            <course-change/>
        </div>
    </div>
</template>

<script>
import CurrencyList from "@/components/CurrencyList.vue";
import CourseChange from "@/components/CourseChange.vue";
import {Api} from "@/helpers/Api";
import {reloadCurrencyPageBus} from "@/helpers/eventBus";
import ExchangeForm from "@/components/ExchangeForm.vue";

export default {
    name: "CurrencyExchangePage",
    data() {
        return {
            userCurrencies: {},
            allCurrencies: {},
        }
    },
    methods: {
        load() {
            Api.getUserCurrencies()
                .then(data => {
                    this.userCurrencies = data;
                });
            Api.getAllCurrencies()
                .then(data => {
                    this.allCurrencies = data;
                });
        },
    },
    mounted() {
        this.load();
        const reloadCurrencyPageListener = this.load;
        reloadCurrencyPageBus.on(reloadCurrencyPageListener);
    },
    components: {ExchangeForm, CourseChange, CurrencyList}
}
</script>

<style scoped>

</style>
