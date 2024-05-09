<template>
   <div class="exchange__wrap" v-if="currencies.length > 1">
       <h4 class="subtitle exchange__title">
           Обмен валюты
       </h4>
       <div v-if="error">{{error}}</div>
       <form action="#" class="exchange__form" @submit="submitForm">
           <div class="exchange-wrap">
               <div class="exchange__select">
                   <div class="text-1 exchange__text">Из</div>
                   <select class="input-select currency-select" v-model="from">
                       <option v-for="item in currencies" :key="item" :value="item">{{item}}</option>
                   </select>
                   <div class="text-1 exchange__text">B</div>
                   <select  class="input-select currency-select" v-model="to">
                       <option v-for="item in currencies" :key="item" :value="item">{{item}}</option>
                   </select>
               </div>
               <div class="exchange__input">
                   <label class="text-1 exchange__label" for="amount">
                       Сумма
                   </label>
                   <input type="text" class="input-select exchange-input" name="amount" v-model="amount">
               </div>
           </div>
           <button class="btn exchange__btn btn-reset">
               Обменять
           </button>
       </form>
   </div>
</template>

<script>

import {Api} from "@/helpers/Api";
import {reloadCurrencyPage} from "@/helpers/eventBus";

export default {
    props: ['currencies'],
    name: "ExchangeForm",
    data() {
        return {
            from: '',
            to: '',
            amount: '',
            error: null,
            errors: new Map([
                ["Unknown currency code", "Передан неверный валютный код, код не поддерживается системой"],
                ["Invalid amount", "Не указана сумма перевода, или она отрицательная"],
                ["Not enough currency", "На валютном счёте списания нет средств"],
                ["Overdraft prevented", "Попытка перевести больше денег, чем доступно на счёте списания"],
                ["Server error", "Непредвиденная ошибка"],
            ]),
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            if (this.from === this.to) {
                this.error = 'Валюты не должны совпадать';
                return;
            }
            if (isNaN(parseFloat(this.amount)) || parseFloat(this.amount) <= 0) {
                this.error = 'Сумма перевода должна быть больше нуля';
                return;
            }
            this.error = null;
            Api.buyCurrency(this.from, this.to, this.amount)
                .then(e => {
                    if (e.error) {
                        this.error = this.errors.get(e.error);
                    } else {
                        this.to = '';
                        this.amount = '';
                        reloadCurrencyPage();
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>
