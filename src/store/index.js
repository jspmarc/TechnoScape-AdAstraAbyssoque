import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      user: {
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      login: false,
      number: 1,
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
