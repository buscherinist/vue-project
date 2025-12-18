import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'

const routes = [
  { path: '/', component: LoginPage },
  { path: '/register', component: RegistrationPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router