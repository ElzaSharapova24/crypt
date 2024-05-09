<template>
    <div class="chart__wrap">
        <div class="chart">
            <button class="chart__title btn-reset">
                <router-link class="chart__title" :to="link">
                    {{separateIncomeAndExpense ? 'Соотношение входящих исходящих транзакций' : 'Динамика баланса'}}
                </router-link>
            </button>
            <Bar
                id="my-chart-id"
                :options="chartOptions"
                :data="chartData"
            />
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: "BalanceChart",
    props: {
        transactions: {
            type: Array
        },
        separateIncomeAndExpense: {
            type: Boolean,
            default: false,
        },
        monthNumber: {
            type: Number,
            default: 12,
        }
    },
    components: { Bar },
    computed: {
        chartData: function () {
            const dates = this.transactions
                .map(item => {
                    return {
                        date: new Date(item.date),
                        item: item,
                    }
                });
            const data = [];
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth();
            for (let i = 0; i < this.monthNumber; i++) {
                const sum = dates.filter(e =>
                    e.date.getFullYear() === year && e.date.getMonth() === month
                ).reduce((a,c) => {
                    if (c.item.from === this.$route.params.id) {
                        a.expenseSum += c.item.amount;
                    } else {
                        a.incomeSum += c.item.amount;
                    }
                    return a;
                }, {
                    incomeSum: 0,
                    expenseSum: 0
                });
                const monthString = (new Date(year, month, 1, 0, 0, 0))
                    .toLocaleString('default', { month: 'long' });
                const label = monthString[0].toUpperCase() + monthString.substring(1).toLowerCase();
                data.push({
                    label: label,
                    incomeSum: sum.incomeSum,
                    expenseSum: sum.expenseSum,
                })
                month = month - 1;
                if (month === -1) {
                    month = 11;
                    year = year - 1;
                }
            }
            data.reverse();
            let counter = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].incomeSum + data[i].expenseSum !== 0) {
                    break;
                }
                counter++;
            }
            data.splice(0, counter)
            const datasets = this.separateIncomeAndExpense
                ? [{
                    backgroundColor: '#FD4E5D',
                    data: data.map(e => e.expenseSum)
                },{
                    backgroundColor: '#76CA66',
                    data: data.map(e => e.incomeSum)
                }]
                : [{
                    backgroundColor: '#116ACC',
                    data: data.map(e => e.incomeSum + e.expenseSum)
                }];
            return {
                labels: data.map(e => e.label),
                datasets: datasets,
            }
        },
        link: function () {
            return '/history/' + this.$route.params.id
        }
    },
    data() {
        return {
            chartOptions: {
                responsive: true,
                color: null,
                plugins: {
                    legend: {display: false},
                    tooltip: {
                        usePointStyle: true
                    }
                },
                scales: {
                    y: {
                        stacked: true,
                    },
                    x: {
                        stacked: true,
                    }
                },
            },
        }
    }
}
</script>

<style scoped>
    #my-chart-id {
        background-color: var(--vt-c-white);
        height: 208px!important;
    }

</style>
