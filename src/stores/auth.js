import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    roles: [],
    token: null,
  }),

  getters: {
    isAuthenticated() {
      return !!this.user;
    },
    hasRole(role) {
      return this.roles.includes(role);
    },
  },

  actions: {
    login(user, roles, token) {
      this.user = user;
      this.roles = roles;
      this.token = token;
      const expiration = new Date().getTime() + 60 * 60 * 1000; // Expires in 1 hour
      sessionStorage.setItem(
        "auth",
        JSON.stringify({ state: this.$state, expiration })
      );
    },
  },
  persist: {
    storage: sessionStorage,
    key: "auth",
    // Use a "restore" callback to check if the state has expired
    restore: (savedState) => {
      const { state, expiration } = JSON.parse(savedState);
      if (expiration && new Date().getTime() > expiration) {
        // Clear the saved state if it has expired
        sessionStorage.removeItem("auth");
        return {};
      }
      return state;
    },
  },
});
