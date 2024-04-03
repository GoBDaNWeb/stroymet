<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { CatalogInfo } from '@/widgets/catalog-info';
import { Products } from '@/widgets/products';

import { ProductItem } from '@/entities/product-item';
import { useRoutertore } from '@/entities/router-store';

import catalogList from '@/shared/config/catalog.json';
import products from '@/shared/config/products.json';
import { Breadcrumbs } from '@/shared/ui';

const routeStore = useRoutertore();
const route = useRoute();

let breadcrumbs = ref([]);
let productName = ref('');

onMounted(() => {
	const productItem = catalogList
		.map(item => {
			if (item.catalogInner) {
				return item.catalogInner.filter(product => {
					return product.url === route.path;
				});
			} else {
				return catalogList.filter(product => {
					return product.url === route.path;
				});
			}
		})
		.flat(Infinity);
	breadcrumbs.value = productItem[0].breadcrumbs;
	productName.value = productItem[0].title;
});
</script>

<template>
	<main>
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<Products :title="productName" :productList="products" />
		<CatalogInfo />
	</main>
</template>

<style lang="scss" scoped>
.products {
	.products-top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 62px;
		h3 {
			color: var(--gray-color);
			font-size: 50px;
			font-weight: 400;
			line-height: 50px;
			text-transform: uppercase;
		}
	}
}
</style>
