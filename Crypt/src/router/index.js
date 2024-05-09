import MainPages from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import AccountPage from "@/pages/AccountPage.vue";
import MainMapPage from "@/pages/MainMapPage.vue";
import BalanceHistoryPage from "@/pages/BalanceHistoryPage.vue";
import AccountListPage from "@/pages/AccountListPage.vue";
import CurrencyExchangePage from "@/pages/CurrencyExchangePage.vue";
import {Api} from "@/helpers/Api";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'main', component:MainPages, path: '/',},
        { name: 'accounts', component: AccountListPage, path: '/accounts',},
        { name: 'account', component: AccountPage, path: '/account/:id',},
        { name: 'card', component: MainMapPage, path: '/card',},
        { name: 'history', component: BalanceHistoryPage, path: '/history/:id',},
        { name: 'currency', component: CurrencyExchangePage, path: '/currency',},
    ]
});

router.beforeEach((to, from, next) => {

    const token = Api.getToken();

    if (token && to.path === '/') {
        next({ name: 'accounts'});
    } else if (!token && to.path !== '/') {
        next({ name: 'main'});
    } else {
        next();
    }
});

export default router;
