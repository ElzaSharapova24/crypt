<template>
    <section class="account">
        <div class="container">
            <account-list-header v-bind:sorting="sorting"/>
            <account-list v-bind:accounts="accounts"/>
        </div>
    </section>
</template>

<script>
import AccountListHeader from "@/components/AccountListHeader.vue";
import AccountList from "@/components/AccountList.vue";
import {Api} from "@/helpers/Api";
import {createAccountBus} from "@/helpers/eventBus";
export default {
    name: "AccountListPage",
    components: {AccountListHeader, AccountList},
    data() {
      return {
          data: {},
          sorting: {
              options: [
                  { text: 'По номеру', value: 'account' },
                  { text: 'По балансу', value: 'balance' },
                  { text: 'По последней транзакции', value: 'date' }
              ],
              selected: 'account',
              onChange: (value) => {
                  this.sorting.selected = value;
              }
          },
          sortingFunctions: {
              account: (a,b) => a.account > b.account ? 1 : -1,
              balance: (a,b) => a.balance > b.balance ? -1 : 1,
              date: (a,b) => {
                  if (!a.transactions[0]) return 1;
                  if (!b.transactions[0]) return -1;

                  return a.transactions[0].date > b.transactions[0].date ? -1 : 1;
              }
          }
      }
    },
    computed: {
      accounts: function () {
          const data = this.data;
          if (data && data.payload) {
              const sort = this.sortingFunctions[this.sorting.selected];
              return data.payload.sort((a, b) => sort(a,b));
          }
          return [];
      },
    },
    methods: {
      async createAccount() {
          const account = await Api.createAccount();
          if (account.payload) {
              this.accounts.push(account.payload);
          }
      }
    },
    mounted() {
        Api.getAccounts()
            .then(data => {
                this.data = data;
            })

        const createAccountListener = this.createAccount;
        createAccountBus.on(createAccountListener);
    }
}
</script>

<style scoped>

</style>
