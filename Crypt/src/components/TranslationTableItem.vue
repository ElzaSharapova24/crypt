<template>
    <div class="table__items">
        <div class="table__item">
            {{from}}
        </div>
        <div class="table__item">
            {{to}}
        </div>
        <div class="table__item" :style="color">
            {{sign}} {{amount}} ₽
        </div>
        <div class="table__item">
            {{dateString}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['amount', 'date', 'from', 'to'],
    name: "TranslationTableItem",
    computed: {
        color: function () {
            if (this.from === this.$route.params.id) {
                return {color: 'red'};
            }
            return {color: 'green'};
        },
        sign: function () {
            if (this.from === this.$route.params.id) {
                return '-';
            }
            return '+';
        },
        dateString: function () {
            const date = new Date(this.date);
            return date.toLocaleString('en-GB')
                .substring(0,10).replaceAll('/', '.');
        }
    }
}
</script>

<style scoped>

</style>
