import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      number: 1,
      recAns: [],
    };
  },
  actions: {},
  mutations: {
    increment(state) {
      state.number += 1;
    },
  },
  getters: {},
});

export default store;
