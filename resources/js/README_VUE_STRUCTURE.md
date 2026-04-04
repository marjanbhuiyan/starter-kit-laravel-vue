# Vue 3 Frontend Structure

This directory contains the complete Vue 3 frontend with Composition API, Vue Router, and Pinia state management.

## 📁 File Structure

```
resources/js/
├── App.vue                          # Main application component
├── app.js                           # Application entry point
├── bootstrap.js                     # Axios and Laravel setup
├── router/
│   ├── index.js                     # Main router configuration
│   └── modules/
│       ├── home.js                  # Home page routes
│       ├── auth.js                  # Authentication routes
│       └── dashboard.js             # Dashboard routes
└── pages/
    ├── Home.vue                     # Home page
    ├── About.vue                    # About page
    ├── Contact.vue                  # Contact page
    ├── auth/
    │   ├── Login.vue                # Login page
    │   └── Register.vue             # Registration page
    └── dashboard/
        ├── Dashboard.vue            # Main dashboard
        └── Profile.vue              # User profile page
```

## 🚀 Available Routes

### Public Routes
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login page
- `/register` - Registration page

### Protected Routes (Require Authentication)
- `/dashboard` - User dashboard
- `/profile` - User profile settings

## 🎨 Features

### Vue 3 Composition API
All pages use the modern `<script setup>` syntax with:
- `ref()` and `reactive()` for state management
- `computed()` for computed properties
- `watch()` and `watchEffect()` for side effects
- Lifecycle hooks (`onMounted`, `onUpdated`, etc.)

### Vue Router
- Modular route structure
- Route-level code splitting
- Navigation guards for authentication
- Dynamic page titles

### Styling
- Tailwind CSS v4 for modern, responsive design
- Beautiful gradient backgrounds
- Consistent color scheme (indigo/blue theme)
- Mobile-responsive layouts

## 📝 Page Components

### Home.vue
Landing page with feature highlights and call-to-action buttons.

### About.vue
Information about the application and its features.

### Contact.vue
Contact form with validation and success feedback.

### auth/Login.vue
User login form with email and password fields.
- Form validation
- Error handling
- Loading states
- Demo credentials display

### auth/Register.vue
User registration form with comprehensive validation.
- Name, email, password fields
- Password confirmation
- Custom error messages
- Terms acceptance

### dashboard/Dashboard.vue
User dashboard showing account overview.
- Welcome message
- Account statistics
- Quick action links
- Logout functionality

### dashboard/Profile.vue
User profile management page.
- Edit name and email
- Form validation
- Success/error feedback
- Account information display

## 🔧 Integration with Backend

All pages include commented code showing where to integrate with the Laravel API:

```javascript
// Example from Login.vue
const handleLogin = async () => {
  loading.value = true;
  error.value = '';

  try {
    // TODO: Implement actual API call to backend
    const response = await axios.post('/api/auth/login', form);
    
    // Store token and redirect
    // router.push('/dashboard');
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to login.';
  } finally {
    loading.value = false;
  }
};
```

## 🎯 Next Steps

1. **Install Dependencies** (already done):
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Connect to Backend API**:
   - Uncomment API calls in each page component
   - Add Axios interceptors for token handling
   - Implement authentication store with Pinia

## 📦 State Management (Pinia)

You can create stores for:
- User authentication state
- Token management
- Global UI state
- API caching

Example store location: `resources/js/stores/auth.js`

## 🔐 Authentication Flow

1. User registers/logs in via `/register` or `/login`
2. Backend returns JWT/Bearer token
3. Store token in localStorage or Pinia store
4. Add token to Axios headers for authenticated requests
5. Use route meta `requiresAuth` to protect routes
6. Redirect to login if not authenticated

## 🎨 Customization

### Change Theme Colors
Edit the Tailwind configuration in `vite.config.js` or use inline classes.

### Add New Pages
1. Create `.vue` file in `resources/js/pages/`
2. Add route in appropriate module file
3. Import in `router/index.js`

### Add Navigation Guard
```javascript
// In router/index.js
router.beforeEach((to, from, next) => {
  const isAuthenticated = // check auth status
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next('/dashboard');
  } else {
    next();
  }
});
```

## 📚 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
