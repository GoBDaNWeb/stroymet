import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
	state: () => {
		return {
			cartProducts: localStorage.getItem('products')
				? JSON.parse(localStorage.getItem('products'))
				: []
		};
	},

	actions: {
		setProduct(item) {
			this.cartProducts = [...this.cartProducts, item];
		},
		removeProduct(id) {
			this.cartProducts = this.cartProducts.filter(item => {
				return item.id !== id;
			});
			localStorage.setItem('products', JSON.stringify([...this.cartProducts]));
		},
		increaceProductCount(id) {
			const foundIndex = this.cartProducts.findIndex(item => item.id === id);
			this.cartProducts[foundIndex].count++;
			localStorage.setItem('products', JSON.stringify([...this.cartProducts]));
		},
		decreaceProductCount(id) {
			const foundIndex = this.cartProducts.findIndex(item => item.id === id);
			this.cartProducts[foundIndex].count--;
			localStorage.setItem('products', JSON.stringify([...this.cartProducts]));
		},
		getProduct(id) {
			const filter = this.cartProducts.filter(product => {
				return product.id === id;
			});
			return filter.length > 0;
		}
	},
	getters: {
		getProductsCount() {
			return this.cartProducts.length;
		},
		getTotalPrice() {
			return this.cartProducts.reduce((total, product) => {
				return total + product.price * product.count;
			}, 0);
		}
	}
});
