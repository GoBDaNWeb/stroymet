<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { ProductItem } from '@/entities/product-item';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';

defineProps(['products']);

const modules = ref([Navigation]);

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="products-swiper-wrapper">
		<div class="top container">
			<h3>смотрите также</h3>
			<div class="navigation">
				<button ref="prev" class="nav"><ArrowLeftIcon /></button>
				<button ref="next" class="nav"><ArrowRightIcon /></button>
			</div>
		</div>
		<Swiper
			:slidesPerView="5"
			:spaceBetween="53"
			class="products-swiper container"
			:navigation="{
				prevEl: prev,
				nextEl: next
			}"
			:modules="modules"
		>
			<SwiperSlide v-for="product in products" :key="product.id">
				<ProductItem
					:key="product.id"
					:id="product.id"
					:imgs="product.imgs"
					:text="product.text"
					:url="product.url"
					:price="product.price"
				/>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style lang="scss" scoped>
.products-swiper-wrapper {
	margin-top: 100px;
	overflow: hidden;
	border-top: 1px solid var(--light-gray-color);
	padding-top: 100px;
	.top {
		display: flex;
		justify-content: space-between;
		h3 {
			color: var(--gray-color);
			text-transform: uppercase;
			font-weight: 400;
			font-size: 50px;
			line-height: 50px;
		}
		.navigation {
			display: flex;
			align-items: center;
			gap: 1px;
		}
	}
	.products-swiper {
		margin-bottom: 100px;
		margin-top: 90px;
	}
}
</style>
