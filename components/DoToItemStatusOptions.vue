<template>
    <div class="flex md:space-x-4 md:justify-center flex-wrap gap-2">
        <StatusOptionButton :option="'ALL'" />
        <StatusOptionButton :option="'PENDING'" />
        <StatusOptionButton :option="'UNFINISHED'" />
        <StatusOptionButton :option="'COMPLETED'" />
    </div>
</template>
<script>
import StatusOptionButton from '~/components/StatusOptionButton.vue';

export default {
    components: { StatusOptionButton }
}

</script>


