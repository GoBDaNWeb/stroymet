<script setup>
import { CatalogItem } from '@/entities/catalog-item';

import { DownloadIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

defineProps(['title', 'catalogList', 'haveBtn']);
</script>

<template>
	<div class="catalog">
		<div class="catalog-top container">
			<h3>{{ title }}</h3>
			<Button v-if="haveBtn"><DownloadIcon />Скачать прайс</Button>
		</div>
		<div class="catalog-content">
			<CatalogItem
				v-for="product in catalogList"
				:key="product.id"
				:img="product.img"
				:title="product.title"
				:url="product.url"
				:index="product.id"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.catalog {
	.catalog-top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 62px;
		@media (max-width: $tab) {
			flex-direction: column;
			gap: 20px;
			margin-bottom: 20px;
		}
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
		button {
			display: flex;
			align-items: center;
			gap: 20px;
			font-size: 20px;
			line-height: 20px;
			font-weight: 400;
			color: var(--blue-color);
			text-transform: uppercase;
			@media (max-width: $tab) {
				font-size: 16px;
				line-height: 16px;
			}
		}
	}
	.catalog-content {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		@media (max-width: $desktop-md) {
			grid-template-columns: repeat(4, 1fr);
		}
		@media (max-width: $desktop-sm) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media (max-width: $tab-sm) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
}
</style>
