import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import store from "./store";
import router from "./router";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

const app = createApp(App);
app.use(store);
app.use(router);

app.config.globalProperties.$store = store;

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");
