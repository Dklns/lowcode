import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from "../views/RegisterPage.vue"
import LoginPage from "../views/LoginPage.vue"
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    name: "login",
    path: "/login",
    component: LoginPage
  },
  {
    name: "register",
    path: "/register",
    component: RegisterPage

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
