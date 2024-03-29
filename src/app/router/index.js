import { createRouter, createWebHistory } from 'vue-router';

import { About } from '@/pages/about';
import { Cart } from '@/pages/cart';
import { Catalog } from '@/pages/catalog';
import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';
import { Product } from '@/pages/product';
import { Products } from '@/pages/products';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/catalog',
			name: 'catalog',
			component: Catalog
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart
		},
		{
			path: '/catalog/:slug',
			name: 'catalog-inner',
			component: Catalog
		},
		{
			path: '/products/:slug',
			name: 'products',
			component: Products
		},
		{
			path: '/product/:slug',
			name: 'product',
			component: Product
		}
	]
});

export default router;
