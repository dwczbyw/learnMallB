import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart')
  },
  {
    path: '/category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});
export default router