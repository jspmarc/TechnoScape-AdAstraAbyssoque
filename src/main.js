import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import store from "./store";
import router from "./router";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch, faStar, faMapMarkerAlt, faCalendar, faMoon, faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import './index.css';

library.add(faSearch);
library.add(faStar);
library.add(faMapMarkerAlt);
library.add(faCalendar);
library.add(faMoon);
library.add(faPersonBooth);

const app = createApp(App);
app.use(store);
app.use(router);

app.config.globalProperties.$store = store;

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
