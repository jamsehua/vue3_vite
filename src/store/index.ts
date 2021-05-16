import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    SET_COUNT(state) {
      state.count++
    }
  }
})

export default store