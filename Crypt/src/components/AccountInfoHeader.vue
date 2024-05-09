<template>
    <section class="account">
        <div class="container">
            <div class="account__content">
                <div class="account__sort">
                    <div class="title account__caption">
                        Просмотр счета
                    </div>
                </div>
                <router-link to="/accounts">
                    <button class="btn btn-reset account-btn" data-back>
                        <svg class="arrow-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="white"/>
                        </svg>
                        Вернуться назад
                    </button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AccountInfoHeader",
}
</script>

<style scoped>

</style>
