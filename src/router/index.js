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
    component: () => import("../views/Apps.vue"),
    children: [
      {
        path: "",
        redirect: "hottest"
      },
      {
        path: "hottest",
        component: () => import("../components/apps/Hottest.vue")
      },
      {
        path: "phone",
        component: () => import("../components/apps/Phone.vue")
      },
      { path: "yifu", component: () => import("../components/apps/Yifu.vue") }
    ]
  },
  {
    path: "/apps/type",
    name: "Cart",
    component: () => import("../components/apps/Type.vue")
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
    path: "/orderlist",
    component: () => import("../components/mine/OrderList.vue")
  },
  {
    path: "/login",
    component: () => import("../components/mine/Login.vue")
  },
  {
    path: "/details/:id",
    component: () => import("../components/apps/Details.vue")
  },
  {
    path: "/mine/favorite",
    component: () => import("../components/mine/Favorite.vue")
  },
  {
    path: "/mine/address",
    component: () => import("../components/mine/Address.vue")
  },
  {
    path: "/mine/callme",
    component: () => import("../components/mine/Callme.vue")
  },
  {
    path: "/mine/gethelp",
    component: () => import("../components/mine/Gethelp.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
