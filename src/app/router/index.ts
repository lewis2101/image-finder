import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("@/app/layout/default.vue"),
    children: [
      { path: "", name: "Home", component: () => import("@/app/views/Main.vue") },
      { path: "blog", name: "Blog", component: () => import("@/app/views/Blog.vue") },    
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
