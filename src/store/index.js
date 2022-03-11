import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: 0
  },
  mutations: {
    incrementValue(state){
      state.value += 1;
    },
    subtractValue(state){
      state.value -= 1;
    }
  },
})
