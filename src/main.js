import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import store from "./store";
import router from "./router";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faStar,
  faStarHalfAlt,
  faMapMarkerAlt,
  faCalendar,
  faMoon,
  faPersonBooth,
  faTimes,
  faChevronDown,
  faPlusCircle,
  faMinusCircle,
  faShieldVirus,
  faCommentAlt,
  faPlus,
  faCreditCard,
  faImages,
  faPaperclip,
  faPaperPlane,
  faUser,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

library.add(faSearch);
library.add(faStar);
library.add(faStarHalfAlt);
library.add(faMapMarkerAlt);
library.add(faCalendar);
library.add(faMoon);
library.add(faPersonBooth);
library.add(faTimes);
library.add(faChevronDown);
library.add(faPlusCircle);
library.add(faMinusCircle);
library.add(faShieldVirus);
library.add(faCommentAlt);
library.add(faPlus);
library.add(faCreditCard);
library.add(faImages);
library.add(faPlus);
library.add(faPaperclip);
library.add(faPaperPlane);
library.add(faUser);
library.add(faDoorOpen);

const app = createApp(App);
app.use(store);
app.use(router);

app.config.globalProperties.$store = store;

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
