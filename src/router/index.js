import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "About",
    component: () => import(/* chunkName: "amz-notice" */ "@/views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
