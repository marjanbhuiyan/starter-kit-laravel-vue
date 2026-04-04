const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/dashboard/Dashboard.vue'),
    meta: { title: 'Dashboard', requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/pages/dashboard/Profile.vue'),
    meta: { title: 'Profile', requiresAuth: true }
  }
];

export default dashboardRoutes;
