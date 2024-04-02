import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
	state: () => {
		return { successActive: false };
	},

	actions: {
		handleOpenSuccessModal() {
			this.successActive = !this.successActive;
		}
	}
});
