<template>
    <div>
        <ul class="space-y-2">
            <li v-for="todo in todoList" :key="todo.id">
                <ToDoItem :todo="todo" />
            </li>
        </ul>
        <ConfirmModal v-show="showModal" />
    </div>
</template>
<script >

import ConfirmModal from '~/components/ConfirmModal.vue';
import ToDoItem from '~/components/ToDoItem.vue';
import { ToDoItemStatusEnums } from '~/enums/ToDoItemStatusEnums';


export default {
    components: { ConfirmModal, ToDoItem },
    computed: {
        todoList() {
            const list = this.$store.state.todos.list
            const selectedStatus = this.$store.state.todos.status
            return list.filter((item) => selectedStatus === ToDoItemStatusEnums.ALL || selectedStatus === ToDoItemStatusEnums.COMPLETED && item.done || (selectedStatus === ToDoItemStatusEnums.PENDING && !item.done && new Date() < new Date(item.deadline)) || (selectedStatus === ToDoItemStatusEnums.UNFINISHED && !item.done && new Date() >= new Date(item.deadline))).sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        },
        showModal() {
            return this.$store.state.openModal.showModal
        }
    },

}


</script>