<template>
    <li class="card__item" :data-account="account">
        <article class="card__content">
            <div class="card__top">
                <h2 class="card__title">
                    {{account}}
                </h2>
                <p class="card_descr">
                    {{balance}} ₽
                </p>
            </div>
            <div class="card__bottom">
                <div class="card__date" v-if="lastDate">
                    <strong class="card__heading">Последняя транзакция:</strong>
                    <time class="card__time" datetime="">{{lastDate}}</time>
                </div>
                    <router-link class="router" :to="linkToAccount">
                        <button class="card__btn btn-reset">
                          Открыть
                        </button>
                    </router-link>

            </div>
        </article>
    </li>
</template>

<script>
export default {
    props: ['account', 'balance', 'mine', 'transactions'],
    name: "AccountListItem",
    computed: {
        lastDate: function () {
            if (this.transactions[0]) {
                const date = new Date(this.transactions[0].date)
                return `${date.getDate()} ${this.getMonth(date)} ${date.getFullYear()}`
            }
            return null;
        },
        linkToAccount: function () {
            return '/account/' + this.account;
        }
    },
    methods: {
        getMonth: (date = new Date) =>
            [
                'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
            ][date.getMonth()],
    }
}
</script>

<style scoped>

</style>
