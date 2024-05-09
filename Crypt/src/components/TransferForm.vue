<template>
    <div class="form__content">
        <h3 class="form__title">
            Новый перевод
        </h3>
        <div class="errors errors-form" v-if="error">{{error}}</div>
        <form class="form" action="#" @submit="submitForm">
            <div class="input__wrap">
                <label class="label" for="number">Номер счёта получателя</label>
                <input data-number type="text" class="account__input input-reset" v-model="to" placeholder="Номер счёта получателя">
            </div>
            <div class="input__wrap">
                <label class="label" for="number">Сумма перевода</label>
                <input data-amount type="text" class="account__input input-reset" v-model="amount" placeholder="Сумма перевода">
            </div>
            <button data-transfer class="btn input__btn btn-reset">
                <svg class="input__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z" fill="white"/>
                </svg>
                Отправить
            </button>
        </form>
    </div>
</template>

<script>
import {Api} from "@/helpers/Api";
import {reloadAccountPage} from "@/helpers/eventBus";

export default {
    name: "TransferForm",
    data() {
        return {
            to: '',
            amount: '',
            error: null,
            errors: new Map([
                ["Invalid account from", "Не указан адрес счёта списания, или этот счёт не принадлежит нам"],
                ["Invalid account to", "Не указан счёт зачисления, или этого счёта не существует"],
                ["Invalid amount", "Не указана сумма перевода, или она отрицательная"],
                ["Overdraft prevented", "Попытка перевести больше денег, чем доступно на счёте списания"],
                ["Server error", "Непредвиденная ошибка"],
            ]),
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            const from = this.$route.params.id;
            if (!this.to) {
                this.error = 'Не указан счет получателя';
                return;
            }
            if (from === this.to) {
                this.error = 'Текущий счет не может быть счетом получателя';
                return;
            }
            if (isNaN(parseFloat(this.amount)) || parseFloat(this.amount) <= 0) {
                this.error = 'Сумма перевода должна быть больше нуля';
                return;
            }
            this.error = null;
            Api.transfer(this.$route.params.id, this.to, this.amount)
                .then(e => {
                    if (e.error) {
                        this.error = this.errors.get(e.error);
                    } else {
                        this.to = '';
                        this.amount = '';
                        reloadAccountPage();
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>
