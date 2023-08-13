<template>
    <form class="" @submit.prevent="addTodo">
        <input name="doToItem" type="text" placeholder="What needs to be done?">
        <button class="">
            Add
        </button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        addTodo(e) {
            this.$store.commit('todos/add', e.target.doToItem.value)
            e.target.doToItem.value = ''
        },
        ...mapMutations({
            toggle: 'todos/toggle'
        })
    }
}
</script>