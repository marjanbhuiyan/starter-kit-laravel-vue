const authRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/Login.vue'),
    meta: { title: 'Login', requiresGuest: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/auth/Register.vue'),
    meta: { title: 'Register', requiresGuest: true }
  }
];

export default authRoutes;
