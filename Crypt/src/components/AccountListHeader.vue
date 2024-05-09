<template>
    <div class="account__content">
        <div class="account__sort">
            <div class="title account__caption">
                Ваши счета
            </div>
            <select class="select" @change="e => sorting.onChange(e.target.value)">
                <option v-for="option in sorting.options"
                        :selected="option.value === sorting.selected"
                        :value="option.value"
                        :key="option.value"
                >
                    {{option.text}}
                </option>
            </select>
        </div>
        <add-account/>
    </div>
</template>

<script>
import AddAccount from "@/components/AddAccount.vue";
export default {
    name: "AccountListHeader",
    props: ['sorting'],
    components: {AddAccount}
}
</script>

<style scoped>

</style>
