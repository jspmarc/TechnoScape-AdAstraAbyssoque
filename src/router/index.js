import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Search from "../views/Search.vue";
import Checkout from "../views/Checkout.vue";
import Negotiation from "../views/Negotiation.vue";

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
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
