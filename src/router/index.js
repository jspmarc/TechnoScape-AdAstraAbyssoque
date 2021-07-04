import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Detail from "../views/Detail.vue";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Search from "../views/Search.vue";

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
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
