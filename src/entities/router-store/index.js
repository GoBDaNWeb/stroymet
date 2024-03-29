import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRoutertore = defineStore("router", {
  state: () => {
    return { prevRoute: "" };
  },

  actions: {
    setRoute(url) {
      this.prevRoute = url;
    },
  },
});
