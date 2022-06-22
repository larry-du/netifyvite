import { createStore } from "vuex";

export default createStore({
  state: {
    test: "1234abc",
  },
  mutations: {},
  actions: {},
  getters: {
    test(state) {
      return state.test;
    },
  },
  modules: {},
});
