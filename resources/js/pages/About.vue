<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold text-indigo-600">
              Laravel Vue App
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/" class="text-gray-700 hover:text-indigo-600 transition">
              Home
            </router-link>
            <router-link to="/about" class="text-gray-700 hover:text-indigo-600 transition">
              About
            </router-link>
            <router-link to="/contact" class="text-gray-700 hover:text-indigo-600 transition">
              Contact
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-xl shadow-md p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
        <p class="text-gray-600 mb-4">
          Welcome to the Laravel Vue Starter Kit - a modern, full-stack application template 
          built with Laravel 11 and Vue 3 Composition API.
        </p>
        <p class="text-gray-600 mb-4">
          This starter kit provides everything you need to build scalable web applications:
        </p>
        <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Laravel backend with Sanctum authentication</li>
          <li>Vue 3 frontend with Composition API</li>
          <li>Vite for lightning-fast builds</li>
          <li>Tailwind CSS for beautiful styling</li>
          <li>Pinia for state management</li>
          <li>Vue Router for navigation</li>
        </ul>
        <div class="mt-8">
          <router-link 
            to="/register" 
            class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('About page mounted');
});
</script>
