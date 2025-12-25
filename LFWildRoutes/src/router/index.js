import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationsView from "@/views/DestinationsView.vue";
import WhoView from "@/views/WhoView.vue";
import LoginView from "@/views/LoginView.vue";
import NewTripView from "@/views/NewTripView.vue";
import ProfileView from "@/views/ProfileView.vue";

import * as Auth from "@/utils/auth.js";
import { useSessionStore } from "@/stores/session";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/who",
      name: "who",
      component: WhoView,
    },
    {
      path: "/destinations",
      name: "destinations",
      component: DestinationsView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/newtrip",
      name: "newtrip",
      component: NewTripView,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const sessionStore = useSessionStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const username = sessionStore.getUser();
    const data = await Auth.isLogged();

    if (username === null || username !== data.username) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
