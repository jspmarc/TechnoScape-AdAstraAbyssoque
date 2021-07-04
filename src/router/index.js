import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Detail from "../views/Detail.vue";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Search from "../views/Search.vue";
import Checkout from "../views/Checkout.vue";
import Negotiation from "../views/Negotiation.vue";
import Chat from "../views/Chat.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: Signup,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/negotiation",
    name: "Negotiation",
    component: Negotiation,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
