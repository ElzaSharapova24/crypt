<template>
    <div class="container">
        <div class="card__content">
            <div class="card__top">
                <h2 class="title card__capture">
                    Карта банкоматов
                </h2>
            </div>
            <YandexMap :coordinates="[55.750616, 37.641809]">
                <YandexMarker v-for="marker in markers" :coordinates="[marker.lat, marker.lon]" >
                    <template #component>
                        <CustomBalloon v-model="name" />
                    </template>
                </YandexMarker>
            </YandexMap>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { YandexMap, YandexMarker  } from 'vue-yandex-maps'
import CustomBalloon from './CustomBalloon.vue';
// eslint-disable-next-line no-unused-vars
const name = ref('Coin.');
export default {
    props: ["markers"],
    name: "AtmMap",
    components: {
        YandexMap,
        YandexMarker,
        CustomBalloon
    }
}
</script>

<style scoped>
    .yandex-container {
        width: 1380px;
        height: 728px;
    }

    .card__capture {
        padding: 50px 0;
    }

    .card__content {
        padding-bottom: 50px;
    }

    @media (max-width: 1024px) {
        .yandex-container {
            width: 980px;
            height: 630px;
        }
    }

    @media (max-width: 768px) {
        .yandex-container {
            width: 720px;
            height: 500px;
        }
    }

    @media (max-width: 576px) {
        .yandex-container {
            width: 530px;
            height: 500px;
        }
    }

    @media (max-width: 320px) {
        .yandex-container {
            width: 280px;
            height: 400px;
        }
    }
</style>
