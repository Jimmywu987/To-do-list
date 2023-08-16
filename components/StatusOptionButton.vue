<template>
    <button @click="onSelect(option)"
        :class="`${selectedStatus === option ? 'bg-gray-600' : 'bg-gray-400'} px-3 py-1 text-light-color rounded-2xl`">
        {{ option }}
    </button>
</template>

<script>



export default {
    props: ["option"],

    computed: {
        selectedStatus() {
            return this.$store.state.todos.status;
        },
    },

    methods: {
        onSelect(status) {
            this.$store.commit("todos/updateStatus", status);
        },
    },

}


</script>