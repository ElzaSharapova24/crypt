<template>
    <nav class="account__nav">
        <ul class="account__list list-reset" v-if="isLogin" data-list>
            <li class="account__item">
                    <router-link to="/card" class="item__link">
                        <button class="item__btn btn-reset">
                        Банкоматы
                       </button>
                    </router-link>
            </li>
            <li class="account__item">
                    <router-link to="/accounts" class="item__link">
                        <button class="item__btn btn-reset">
                        Счета
                        </button>
                    </router-link>
            </li>
            <li class="account__item">
                    <router-link class="item__link" to="/currency">
                        <button class="item__btn btn-reset">
                        Валюта
                        </button>
                    </router-link>
            </li>
            <li class="account__item">
                <button class="item__btn btn-reset">
                    <a class="item__link" href="#" @click="logout">
                        Выйти
                    </a>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
import {Api} from "@/helpers/Api";

export default {
    name: "HeaderAccountNav",
    methods: {
        logout(e) {
            e.preventDefault();
            Api.removeToken();
            this.$router.push('/');
        }
    },
    computed: {
        isLogin: function() {
            return this.$route.path !== '/';
        },
    }
}
</script>

<style scoped>
  </style>
