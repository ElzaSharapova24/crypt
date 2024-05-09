<template>
    <atm-map v-if="data.payload" v-bind:markers="data.payload"/>
</template>

<script>
import AtmMap from "@/components/AtmMap.vue";
import {Api} from "@/helpers/Api";
export default {
    name: "MainMapPage",
    data() {
        return {
            data: {},
        }
    },
    mounted() {
        Api.getPlacesOnMap()
            .then(data => {
                this.data = data;
            })
    },
    components: {AtmMap}
}
</script>

<style scoped>

</style>
