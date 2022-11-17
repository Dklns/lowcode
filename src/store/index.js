import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      JSESSIONID: "",
    }
  },
  mutations: {
    changeMessage(state, JSESSIONID) {
      state.JSESSIONID = JSESSIONID;
    },
  }
})
