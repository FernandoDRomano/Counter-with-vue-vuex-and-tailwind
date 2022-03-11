<template>
  <div id="app" class="container mx-auto bg-gray-200 min-h-screen">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto pt-20">
    <h1 class="text-4xl text-center font-bold my-3">Contador con Vuex</h1>
    <contador></contador>
  </div>
</template>

<script>

import Contador from './components/Contador.vue';

export default {
  name: 'App',
  components: {
    Contador
  }
}

</script>

