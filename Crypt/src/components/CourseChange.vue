<template>
    <div class="course__wrapper">
        <h4 class="subtitle course__subtitle">
            Изменение курсов в реальном времени
        </h4>
        <div class="course__list">
            <div class="course-wrap" v-for="currency in currencies" :key="currency.from + currency.to">
                <span class="item">{{currency.from}}/{{currency.to}}</span>
                <span class="dots">
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . .
                </span>
                <span class="text"
                >{{currency.rate}}</span>
                <svg v-if="currency.change === 1" class="course-svg" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10L10 0L0 10L20 10Z" fill="#76CA66"/>
                </svg>

                <svg v-if="currency.change === -1" class="course-svg__red" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L10 10L20 0H0Z" fill="#FD4E5D"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CourseChange",
    data() {
        return {
            currencies: {}
        }
    },
    mounted() {
        const currencies = this.currencies;
        let socket = new WebSocket("ws://localhost:3000/currency-feed");

        socket.onopen = function() {
            console.log("[open] Соединение установлено");
        };

        socket.onmessage = function(event) {
            const data = JSON.parse(event.data);
            if (data.type !== 'EXCHANGE_RATE_CHANGE')
                return;
            // console.log(`[message] Данные получены с сервера: ${data}`);
            currencies[data.from + data.to] = data;
        };
    }
}
</script>

<style scoped>

</style>
