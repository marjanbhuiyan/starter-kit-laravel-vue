// api/client.js

import axios from 'axios';

// Create axios instance with default configuration
const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true, // REQUIRED: Send cookies with requests
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Add CSRF token to requests automatically
apiClient.interceptors.request.use((config) => {
    // Get XSRF token from cookie
    const token = getCookie('XSRF-TOKEN');
    if (token) {
        config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
    }
    return config;
});

// Helper function to get cookie value
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
}

export default apiClient;