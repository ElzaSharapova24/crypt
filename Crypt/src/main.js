import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1',
}


createApp(App)
    .use(router)
    .use(YmapPlugin, settings)
    .mount('#app')
