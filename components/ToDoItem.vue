<template>
    <form class="flex items-center space-x-2" @submit.prevent="edit">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">

        <input type="text" :value="todo.text" v-if="isEdit" name="editValue">
        <span :class="{ done: todo.done }" v-else>{{ todo.text }}</span>

        <input name="deadline" type="datetime-local" :value="todo.deadline" :min="this.now" v-if="isEdit" />
        <span v-else>{{ todo.deadline }}</span>

        <div v-if="!isEdit">
            <font-awesome-icon icon="fa-solid fa-trash" class="text-gray-600 cursor-pointer" @click="onOpen" />
            <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-gray-600 cursor-pointer"
                @click="isEdit = true" />
        </div>
        <div v-else>
            <button @click="isEdit = false">
                cancel
            </button>
            <button>
                update
            </button>
        </div>
    </form>
</template>

<script>
import { mapMutations } from "vuex";


export default {
    props: ["todo"],
    data() {
        return {
            isEdit: false,
            now: null,
        }
    },
    mounted() {
        // set the time matches the default value input
        this.now = new Date();
        this.now.setMinutes(this.now.getMinutes() - this.now.getTimezoneOffset());
        this.now.setSeconds(this.now.getSeconds(), 0);
        const temp = this.now.toISOString().slice(0, -1).split(":")
        temp.pop()
        this.now = temp.join(":")
    },
    methods: {
        ...mapMutations({
            toggle: "todos/toggle",
        }),
        edit(event) {
            const { editValue, deadline } = event.target

            this.$store.commit("todos/edit", { ...this.todo, text: editValue.value, deadline: deadline.value })
            this.isEdit = false
        },
        onOpen() {
            this.$store.commit("todos/storeRemoveItemId", this.todo.id)
            this.$store.commit("openModal/onOpen", {
                onCancel: () => {
                    this.$store.commit("todos/emptyRemoveItemId")
                }, onConfirm: () => {
                    this.$store.commit("todos/remove")
                }
            })
        },

    }
}


</script>