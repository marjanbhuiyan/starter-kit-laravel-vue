import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from './modules/home.js';
import authRoutes from './modules/auth.js';
import dashboardRoutes from './modules/dashboard.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
    meta: { title: 'Home' }
  },
  ...homeRoutes,
  ...authRoutes,
  ...dashboardRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard for route meta titles
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Laravel Vue App';
  next();
});

export default router;
