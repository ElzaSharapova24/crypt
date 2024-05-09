<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <img src="/img/svg/Logo.svg" alt="Логотип">
                </div>
                <header-account-nav/>
            </div>
        </div>
    </header>
</template>

<script>
import HeaderAccountNav from "@/components/HeaderAccountNav.vue";
export default {
  name: "ComponentHeader",
    components: {HeaderAccountNav}
}
</script>

<style scoped>

</style>
