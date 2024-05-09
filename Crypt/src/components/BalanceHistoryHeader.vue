<template>
    <div class="history__content">
        <div class="left">
            <div class="title history__title">
                История баланса
            </div>
            <div class="account__number">
                № {{account}}
            </div>
        </div>
        <router-link :to="linkToAccount">
            <button class="btn btn-reset account-btn">
                <svg class="arrow-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="white"/>
                </svg>
                Вернуться назад
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "BalanceHistoryHeader",
    props: ['account'],
    computed: {
        linkToAccount: function () {
            return '/account/' + this.account;
        }
    }
}
</script>

<style scoped>

</style>
