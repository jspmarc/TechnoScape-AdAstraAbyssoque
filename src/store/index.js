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
      queryNav: "",
      query: "",
    };
  },
  actions: {},
  mutations: {
    increment(state) {
      state.number += 1;
    },
    SET_QUERY(state, val) {
      state.query = val;
    },
    SET_QUERYNAV(state, val) {
      state.queryNav = val;
    },
  },
  getters: {},
});

export default store;
