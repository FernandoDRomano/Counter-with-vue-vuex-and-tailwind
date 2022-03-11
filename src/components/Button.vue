<template>
    <button
        @click="action" 
        class="px-5 py-2 text-white rounded-md uppercase flex transition-colors duration-300 ease-in-out">
            <span v-html="icon"></span>
            {{name}}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props:{
        name:{
            required: true,
            type: String
        },
        icon:{
            required: true
        },
        action:{
            required: true
        }
    },
}
</script>

<style>

</style>