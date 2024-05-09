<template>
    <section class="login">
        <div class="container">
            <div class="login__content">
                <h1 class="title login__title">
                    Вход в аккаунт
                </h1>
                <div v-if="errors.form">{{errors.form}}</div>
                <form class="form" action="#" @submit="submit">
                    <div class="input">
                        <div  class="errors" v-if="errors.login">{{errors.login}}</div>
                        <label class="form__label" for="login">Логин</label>
                        <input
                            type="text"
                            class="form__input input-reset"
                            placeholder="Введите ваш логин"
                            v-model="login"
                            data-login
                        >
                    </div>
                    <div class="input">
                        <div class="errors" v-if="errors.password">{{errors.password}}</div>
                        <label class="form__label" for="password">Пароль</label>
                        <input
                            type="password"
                            class="form__input input-reset"
                            placeholder="Введите ваш пароль"
                            v-model="password"
                            data-password
                        >
                    </div>
                    <button class="btn-reset form__btn">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import {Api} from "@/helpers/Api";

export default {
    name: "LoginToAccount",
    data() {
        return {
            login: '',
            password: '',
            errors: {}
        }
    },
    methods: {
        async submit(e) {
            e.preventDefault();
            this.errors = {};
            const loginIsValid = this.validateLogin();
            const passwordIsValid = this.validatePassword();
            if (!loginIsValid || !passwordIsValid)
                return;

            const result = await Api.login(this.login, this.password);
            if (result.error) {
                this.errors.form = result.error;
            } else {
                Api.setToken(result.payload.token);
                this.$router.push('/accounts');
            }
        },
        validateLogin() {
            if (this.login.length < 6) {
                this.errors.login = 'Длина логина должна быть не менее 6 символов';
                return false;
            }
            if (this.login.includes(' ')) {
                this.errors.login = 'Логин не должен содержать пробел';
                return false;
            }
            return true;
        },
        validatePassword() {
            if (this.password.length < 6) {
                this.errors.password = 'Длина пароля должна быть не менее 6 символов';
                return false;
            }
            if (this.password.includes(' ')) {
                this.errors.password = 'Пароль не должен содержать пробел';
                return false;
            }
            return true;
        }
    }
}
</script>

<style scoped>

</style>
