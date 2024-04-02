<script setup>
import ProductInfo from './ProductInfo.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { ProductsSwiper } from '@/entities/products-swiper';

import product from '@/shared/config/product.json';
import products from '@/shared/config/products.json';
import { Breadcrumbs } from '@/shared/ui';

const route = useRoute();
const filterProduct = product.filter(item => {
	return item.url === route.path;
});
</script>

<template>
	<main class="product-page">
		<Breadcrumbs :breadcrumbs="filterProduct[0].breadcrumbs" />
		<ProductInfo :product="filterProduct[0]" />
		<ProductsSwiper :products="products" />
	</main>
</template>
