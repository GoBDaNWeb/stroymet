<script setup>
import { ProductItem } from '@/entities/product-item';

import { DownloadIcon, PlusIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

defineProps(['title', 'productList', 'haveBtn']);
</script>

<template>
	<div class="products">
		<div class="products-top container">
			<h3>{{ title }}</h3>
		</div>
		<div class="products-content">
			<ProductItem
				v-for="product in productList"
				:key="product.id"
				:id="product.id"
				:imgs="product.imgs"
				:text="product.text"
				:url="product.url"
				:price="product.price"
				:count="product.count"
				:width="product.width ? product.width[0].label : null"
				:length="product.length ? product.length[0].label : null"
				:type="product.typeOfCoating ? product.typeOfCoating[0].label : null"
			/>
		</div>
		<div class="button-wrapper" v-if="productList.length > 8">
			<Button><PlusIcon />показать ещё</Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

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
			@media (max-width: $tab) {
				font-size: 30px;
				line-height: 30px;
			}
		}
	}
	.products-content {
		display: grid;
		padding: 0 30px;

		grid-template-columns: repeat(5, 1fr);
		gap: 53px;
		@media (max-width: $desktop-md) {
			grid-template-columns: repeat(4, 1fr);
		}
		@media (max-width: $desktop-sm) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media (max-width: $tab) {
			gap: 20px;
			padding: 0 20px;
		}
		@media (max-width: $tab-sm) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	.button-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 50px;
		button {
			color: var(--blue-color);
			display: flex;
			align-items: center;
			gap: 10px;
			font-weight: 400;
			font-size: 14px;
			line-height: 14px;
			text-transform: uppercase;
		}
	}
}
</style>
