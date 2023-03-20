import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import PostsPage from "@/pages/PostsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    component: () => import("@/pages/PostDescription.vue"), //lazy loading
  },
  {
    path: "/store",
    component: () => import("@/pages/PostPageWithStore.vue"),
  },
  {
    path: "/compositionApi",
    component: () => import("@/pages/PostPageCompositionApi"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
