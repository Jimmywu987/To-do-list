<template>
    <div class="flex space-x-2">
        <button @click="onSelect('ALL')">
            All
        </button>
        <button @click="onSelect('PENDING')">
            Pending
        </button>
        <button @click="onSelect('UNFINISHED')">
            Unfinished
        </button>
        <button @click="onSelect('COMPLETED')">
            Completed
        </button>
    </div>
</template>
<script>


export default {

    methods: {
        onSelect(status) {
            this.$store.commit("todos/updateStatus", status)
        },
    }
}

</script>


