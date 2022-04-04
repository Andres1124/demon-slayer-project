import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import BackHomeView from '../views/BackHomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import CreateCategoryView from '../views/CreateCategoryView.vue'
import EditCategoryView from '../views/EditCategoryView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: BackHomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView
  },
  {
    path: '/create-category',
    name: 'create-category',
    component: CreateCategoryView
  },
  {
    path: '/edit-category',
    name: 'edit-category',
    component: EditCategoryView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
