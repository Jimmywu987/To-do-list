<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-[#000000da]" @click="onClose">
        <div class="text-center bg-white h-[500px] w-[500px] mt-[10%] py-14 rounded-2xl" @click.stop>
            <h6 class=" font-medium text-2xl my-5 ">Are you sure?</h6>
            <div>
                <button @click="onClose" class="bg-gray-600 w-36 h-10 text-white text-sm rounded-2xl mt-12">Cancel</button>
                <button @click="onConfirm"
                    class="bg-red-600 w-36 h-10 text-white text-sm rounded-2xl mt-12">Confirm</button>
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

