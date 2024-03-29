<script setup>
import ProductInfo from './ProductInfo.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { ProductsSwiper } from '@/entities/products-swiper';

import product from '@/shared/config/product.json';
import products from '@/shared/config/products.json';
import { Breadcrumbs } from '@/shared/ui';
</script>

<template>
	<main class="product-page">
		<Breadcrumbs :breadcrumbs="product.breadcrumbs" />
		<ProductInfo
			:title="product.title"
			:count="product.count"
			:imgs="product.imgs"
			:price="product.price"
			:url="product.url"
			:id="product.id"
		/>
		<ProductsSwiper :products="products" />
	</main>
</template>
