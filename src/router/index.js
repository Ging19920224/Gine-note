import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'javascript',
    component: () => import('../views/Javascript.vue'),
  },
  {
    path: '/html',
    name: 'Html',
    component: () => import('../views/Html.vue'),
  },
  {
    path: '/Github',
    name: 'Github',
    component: () => import('../views/Github.vue'),
  },
  {
    path: '/Vue',
    name: 'Vue',
    component: () => import('../views/Vue.vue'),
  },
  {
    path: '/PHP',
    name: 'PHP',
    component: () => import('../views/PHP.vue'),
  },
  {
    path: '/Tool',
    name: 'Tool',
    component: () => import('../views/Tool.vue'),
  },
  {
    path: '/Web',
    name: 'Web',
    component: () => import('../views/Web.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
