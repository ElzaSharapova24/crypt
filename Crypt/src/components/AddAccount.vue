<template>
    <div class="account__add">
        <button class="btn btn-reset account__btn" @click="onCreateAccountClick" data-create-account>
            <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" stroke-width="2"/>
            </svg>
            Создать новый счёт
        </button>
    </div>
</template>

<script>
import {createAccount} from "@/helpers/eventBus";

export default {
    name: "AddAccount",
    methods: {
        onCreateAccountClick() {
            createAccount();
        }
    }
}
</script>

<style scoped>

</style>
