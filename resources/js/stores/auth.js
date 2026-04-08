import { defineStore } from 'pinia';

export default defineStore('auth', {
  state: () => ({
    user: null,
  }),
  persist: true,
});
