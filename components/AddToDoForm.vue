<template>
    <form class="" @submit.prevent="addTodo">
        <input name="doToItem" type="text" placeholder="What needs to be done?" />
        <input name="deadline" type="datetime-local" :value="this.now" :min="this.now" />
        <button class="">
            Add
        </button>
        <p>
            {{ this.error }}
        </p>
    </form>
</template>


<script >



export default {

    methods: {
        addTodo(event) {
            const { doToItem, deadline } = event.target
            const text = doToItem.value
            const deadlineDateTime = deadline.value
            if (text === "") {
                this.error = "Please input a do to task"
                return
            }

            this.$store.commit('todos/add', { text, deadline: deadlineDateTime })
            event.target.doToItem.value = ''

            if (!!this.error) {
                this.error = ""
            }
        },


    },
    data() {
        return {
            now: null,
            error: ""
        };
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

}
</script>


