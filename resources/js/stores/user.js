import { defineStore } from 'pinia';

export default defineStore('user', {
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    actions: {
        setUser(user) {
            this.user = user;
        },
        setIsAuthenticated(isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
        },
    },
});
