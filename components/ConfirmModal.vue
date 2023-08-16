<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-[#000000da]" @click="onClose">
        <div class="flex flex-col bg-light-color dark:bg-gray-800 h-[300px] w-full sm:w-[500px] mt-[10%] rounded-2xl mx-6"
            @click.stop>
            <font-awesome-icon icon="fa-solid fa-xmark" class="text-gray-600 text-3xl m-3 self-end cursor-pointer"
                @click="onClose" />
            <div class="py-10 text-center">
                <h6 class=" font-medium text-2xl my-5 ">Are you sure?</h6>
                <div class="space-x-2">
                    <button @click="onClose"
                        class="bg-gray-600 w-36 h-10 text-white text-sm rounded-2xl mt-12">Cancel</button>
                    <button @click="onConfirm"
                        class="bg-red-600 w-36 h-10 text-white text-sm rounded-2xl mt-12">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations({
            onClose: 'openModal/onClose',
            onConfirm: 'openModal/onConfirm',
        }),

    }
}
</script>

