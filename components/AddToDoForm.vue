<template>
    <form @submit.prevent="addTodo" class="space-y-2 flex flex-col">
        <div class="flex items-end justify-end">

            <div class="flex items-end space-x-3">

                <div class="border border-gray-500 rounded p-1">
                    <input type="number"
                        class="border-gray-500 py-0.5 rounded text-dark-color outline-none border w-10 px-2"
                        v-model="duration" />
                    :
                    <select class="outline-none border border-gray-500 px-2 py-1 rounded text-dark-color"
                        v-model="durationUnit">
                        <option value="hours">Hour</option>
                        <option value="days">Day</option>
                        <option value="weeks">Week</option>
                        <option value="months">Month</option>
                    </select>
                    <button class="border border-emerald-600 px-2 py-1 rounded-xl" @click.stop.prevent="addTime">
                        <font-awesome-icon icon="fa-solid fa-circle-plus" class="text-emerald-600 " />
                        Add time
                    </button>
                </div>


                <label class="space-y-1">
                    <p>
                        When should it be done?:
                    </p>
                    <input name="deadline" type="datetime-local" :value="this.now" :min="this.now"
                        class="outline-none p-2 bg-light-color border rounded text-dark-color" @change="dateTimeOnChange" />
                </label>

            </div>
        </div>


        <label class="flex space-x-2 w-full border-2  items-center pl-3 pr-1 rounded-3xl bg-light-color">
            <font-awesome-icon icon="fa-solid fa-pen" class="text-gray-200 " />
            <input name="doToItem" type="text" placeholder="What needs to be done?"
                class="outline-none p-2 bg-light-color w-full text-dark-color" />
            <button
                class="px-4 py-1 bg-emerald-500 rounded-3xl text-white shadow-md hover:bg-emerald-600 font-semibold transition-colors duration-200">
                Add
            </button>
        </label>

        <p class="text-sm text-rose-500 ">
            {{ this.error }}
        </p>

    </form>
</template>


<script >


import { dateTimeFormatter } from '~/plugins/dateTimeFormatter';
import { add } from "date-fns"
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
        addTime() {
            this.now = dateTimeFormatter(add(new Date(this.now), { [this.durationUnit]: this.duration }))

        },
        dateTimeOnChange(event) {
            this.now = dateTimeFormatter(new Date(event.target.value))
        }


    },
    data() {
        return {
            now: null,
            error: "",
            duration: 1,
            durationUnit: "days",
        };
    },
    mounted() {
        // set the time matches the default value input
        this.now = dateTimeFormatter()
    },

}
</script>


<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>