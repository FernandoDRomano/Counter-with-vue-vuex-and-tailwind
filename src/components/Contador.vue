<template>
    <div class=" my-4">
        <h2 class="px-10 py-4 w-4/5 sm:w-3/4 sm:mb-6 lg:w-80 xl:w-96 text-center bg-gray-600 text-white text-lg sm:text-2xl mx-auto">Valor: {{value}}</h2>
        <!-- <div class="flex w-full justify-center space-x-4 my-3"> -->
        <div class="flex flex-col sm:flex-row sm:justify-center w-4/5 mx-auto mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
                name="Incrementar" 
                :icon="iconAdd" 
                :action="incrementValue"
                class="bg-blue-500 hover:bg-blue-800">
            </Button>
            <Button 
                name="Decrementar" 
                :icon="iconSubtract" 
                :action="subtractValue"
                :class="['bg-red-500 hover:bg-red-800', value < 1 ? 'disabled:opacity-30 disabled:bg-red-500 cursor-not-allowed' : '']" :disabled="value < 1">
            </Button>
        </div>
    </div>
</template>

<script>
    import Button from './Button.vue';
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'Contador',
        components: {
          Button  
        },
        computed:{
            ...mapState(['value']),
        },
        data(){
            return{
                iconAdd: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 fill-current mr-1"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
                iconSubtract: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 fill-current mr-1"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'
            }
        },
        methods:{
            ...mapMutations(['incrementValue', 'subtractValue'])
        }
    }
</script>
