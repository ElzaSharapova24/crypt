<template>
    <div class="currency__wrap">
        <h4 class="subtitle currency__subtitle">
            Ваши валюты
        </h4>
        <div class="currency__list">
            <div class="currency-item" v-for="item in currencies" :key="item.code">
                <span class="item">{{item.code}}</span>
                <span class="dots">
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . .
                </span>
                <span class="text"
                >{{item.amount}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['currencies'],
    name: "CurrencyList",
}
</script>

<style scoped>
</style>
