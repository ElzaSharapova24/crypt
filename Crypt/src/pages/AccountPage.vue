<template>
    <account-info-header/>
    <account-info v-if="data.payload" v-bind="data.payload"/>
</template>

<script>
import AccountInfo from "@/components/AccountInfo.vue";
import AccountInfoHeader from "@/components/AccountInfoHeader.vue";
import {Api} from "@/helpers/Api";
import {reloadAccountPageBus} from "@/helpers/eventBus";
export default {
    name: "AccountPage",
    components: {AccountInfoHeader, AccountInfo},
    data() {
        return {
            data: {},
        }
    },
    methods: {
      loadData() {
          Api
              .getAccount(this.$route.params.id)
              .then(data => {
                  this.data = data;
              });
      }
    },
    mounted() {
        this.loadData();
        const reloadAccountPageListener = this.loadData;
        reloadAccountPageBus.on(reloadAccountPageListener);
    }
}
</script>

<style scoped>

</style>
