import apiClient from '../../api/client.js';

export async function initializeCsrf() {
    await apiClient.get('/sanctum/csrf-cookie');
}


/**
 * Register new user
 */
export async function register(name, email, password, passwordConfirmation) {
    await initializeCsrf();
    
    const response = await apiClient.post('api/auth/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
    });
    
    return response.data;
}