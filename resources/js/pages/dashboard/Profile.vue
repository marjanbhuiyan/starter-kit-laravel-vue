<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/dashboard" class="text-xl font-bold text-indigo-600">
              Dashboard
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/dashboard" class="text-gray-700 hover:text-indigo-600 transition">
              Overview
            </router-link>
            <router-link to="/profile" class="text-gray-700 hover:text-indigo-600 transition">
              Profile
            </router-link>
            <button 
              @click="handleLogout"
              class="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-xl shadow-md p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Your Profile</h1>

        <form @submit.prevent="handleUpdateProfile" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <!-- Success Message -->
          <div v-if="successMessage" class="p-4 bg-green-100 text-green-700 rounded-lg">
            {{ successMessage }}
          </div>

          <!-- Error Messages -->
          <div v-if="errors.length > 0" class="space-y-2">
            <div v-for="(error, index) in errors" :key="index" class="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {{ error }}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4">
            <button
              type="submit"
              :disabled="loading"
              class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!loading">Save Changes</span>
              <span v-else>Saving...</span>
            </button>

            <button
              type="button"
              @click="resetForm"
              class="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>

        <!-- Account Info -->
        <div class="mt-8 pt-8 border-t border-gray-200">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Member since:</span>
              <span class="text-gray-900 font-medium">{{ formatDate(user.created_at) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Account status:</span>
              <span class="text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  name: '',
  email: ''
});

const loading = ref(false);
const successMessage = ref('');
const errors = ref([]);

// Mock user data (replace with actual API call)
const user = reactive({
  name: 'Demo User',
  email: 'demo@example.com',
  created_at: new Date().toISOString()
});

const formatDate = (dateString) => {
  if (!dateString) return 'Today';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const resetForm = () => {
  form.name = user.name;
  form.email = user.email;
  successMessage.value = '';
  errors.value = [];
};

const handleUpdateProfile = async () => {
  loading.value = true;
  errors.value = [];
  successMessage.value = '';

  try {
    console.log('Updating profile:', form);
    
    // TODO: Implement actual API call to backend
    // await axios.put('/api/auth/profile', form);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    successMessage.value = 'Profile updated successfully!';
    
    // Update local user data
    Object.assign(user, { ...form });
  } catch (err) {
    if (err.response?.data?.errors) {
      errors.value = Object.values(err.response.data.errors).flat();
    } else {
      errors.value = [err.response?.data?.message || 'Failed to update profile.'];
    }
  } finally {
    loading.value = false;
  }
};

const handleLogout = () => {
  console.log('Logging out...');
  router.push('/login');
};

onMounted(() => {
  // Initialize form with user data
  resetForm();
  console.log('Profile page mounted');
  
  // TODO: Fetch actual user data from API
  // axios.get('/api/auth/user').then(response => {
  //   Object.assign(user, response.data.user);
  //   resetForm();
  // });
});
</script>
