import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/apps",
    name: "Apps",
    component: () => import("../views/Apps.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("../views/Mine.vue")
  },
  {
    path: "/login",
    component: () => import("../components/mine/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
