<template>
    <form class="space-y-1" @submit.prevent="edit">
        <div class="flex items-center space-x-3">
            <div :class="`border-2 rounded-full ${todo.done ? ' border-emerald-600' : 'border-gray-500'} w-6 h-6 flex
            justify-center items-center cursor-pointer bg-white`" @click="toggle(todo)" v-if="isPending">
                <font-awesome-icon icon="fa-solid fa-check" class="text-emerald-600" v-if="todo.done" />
            </div>
            <div v-else class="ml-6"></div>

            <div class="flex flex-1 justify-between space-x-2">
                <div class="flex flex-col flex-1 space-y-1 w-10/12 lg:w-11/12">
                    <div
                        :class="`text-xl rounded bg-gray-100 flex-1 px-3 py-1 border-l-4 text-dark-color ${todo.done ? 'border-l-emerald-600' : this.isPending ? 'border-l-gray-400' : 'border-l-rose-600'}`">
                        <input type="text" v-model="text" v-if="isEdit" name="editValue"
                            class=" outline-gray-700 px-2 bg-gray-100  w-full" @keypress.enter.prevent="edit">
                        <span class="" v-else>{{ todo.text }}</span>

                    </div>
                    <p class="text-sm text-rose-500 " v-if="!!this.error">
                        {{ this.error }}
                    </p>
                </div>
                <div v-if="!isEdit" class="space-x-1 md:space-x-2 text-base md:text-xl w-2/12 lg:w-1/12  flex justify-end">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" class="cursor-pointer hover:opacity-50"
                        @click="isEdit = true" v-if="isPending && !todo.done" />
                    <font-awesome-icon icon="fa-solid fa-copy" class="cursor-pointer hover:opacity-50"
                        @click="duplicateItem(todo)" v-if="isPending && !todo.done" />
                    <font-awesome-icon icon="fa-solid fa-trash" class="cursor-pointer hover:opacity-50" @click="onOpen" />
                </div>
            </div>

        </div>


        <div class="text-sm ml-9 flex justify-between">

            <span v-if="!isEdit">Complete it by: {{ $dateFns.format(todo.deadline, "Pp") }}</span>
            <div v-else
                class="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start md:space-x-2 space-y-1">
                <input name="deadline" type="datetime-local" :value="this.deadline" :min="this.now"
                    class="outline-none border border-gray-500 p-1 rounded-xl text-dark-color" @change="dateTimeOnChange" />
                <div class="border border-gray-500 rounded-xl p-1">
                    <input type="number" class="border-gray-500  rounded text-dark-color outline-none border w-10 px-2"
                        v-model="duration" />
                    :
                    <select class="outline-none border border-gray-500 px-2  rounded text-dark-color"
                        v-model="durationUnit">
                        <option value="hours">Hour</option>
                        <option value="days">Day</option>
                        <option value="weeks">Week</option>
                        <option value="months">Month</option>
                    </select>
                    <button class="border border-emerald-600 px-1 rounded-xl" @click.stop.prevent="addTime">
                        <font-awesome-icon icon="fa-solid fa-circle-plus" class="text-emerald-600 " />
                        Add time
                    </button>
                </div>
            </div>






        </div>

        <div v-if="isEdit" class="space-x-1 text-sm ml-9">
            <button @click="isEdit = false" class="px-2 py-1 bg-gray-500 rounded-xl text-light-color">
                Cancel
            </button>
            <button class="px-2 py-1 bg-green-500 rounded-xl text-light-color">
                Update
            </button>
        </div>


    </form>
</template>

<script>
import { mapMutations } from "vuex";
import { dateTimeFormatter } from '~/plugins/dateTimeFormatter';

import { add } from "date-fns"

export default {
    props: ["todo"],
    data() {
        return {
            error: "",
            isEdit: false,
            now: null,
            deadline: this.todo.deadline,
            isPending: new Date(this.todo.deadline) > new Date(),
            duration: 1,
            durationUnit: "days",
            text: this.todo.text
        }
    },
    mounted() {
        // set the time matches the default value input
        this.now = dateTimeFormatter()


    },
    methods: {
        ...mapMutations({
            toggle: "todos/toggle",
        }),
        edit(event) {
            const form = event.keyCode === 13 ? event.target.form : event.target
            const { editValue, deadline } = form
            if (editValue.value === "") {
                this.error = "Please input a do to task."
                return
            }

            if (!!this.error) {
                this.error = ""
            }
            this.$store.commit("todos/edit", { ...this.todo, text: editValue.value, deadline: deadline.value })
            this.isEdit = false
        },
        duplicateItem({ text, deadline }) {
            this.$store.commit('todos/add', { text, deadline })
        },
        onOpen() {
            this.$store.commit("todos/storeRemoveItemId", this.todo.id)
            this.$store.commit("openModal/onOpen")

        },
        addTime() {
            this.deadline = dateTimeFormatter(add(new Date(this.deadline), { [this.durationUnit]: this.duration }))

        },
        dateTimeOnChange(event) {
            this.deadline = dateTimeFormatter(new Date(event.target.value))
        }

    }
}


</script>