import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/page1/index.vue';
import About from '../views/page2/index.vue';

const routes: any[] = [
  {
    path: '/page1',
    name: 'Page1',
    component: Home,
  },
  {
    path: '/page2',
    name: 'Page2',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
