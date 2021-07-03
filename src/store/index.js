import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

// Create a new store instance.
const store = createStore({
  state,
  actions,
  getters,
  mutations,
});

export default store;
