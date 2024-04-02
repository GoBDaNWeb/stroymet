<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { ProductItem } from '@/entities/product-item';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';

defineProps(['products']);

const modules = ref([Navigation, Pagination]);

const prev = ref(null);
const next = ref(null);
const pagination = ref(null);
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
			:pagination="{
				el: pagination,
				clickable: true
			}"
			:modules="modules"
			:breakpoints="{
				0: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				767: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 50
				},
				1440: {
					slidesPerView: 5
				}
			}"
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
		<div ref="pagination" class="pagination"></div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.products-swiper-wrapper {
	margin-top: 100px;
	overflow: hidden;
	border-top: 1px solid var(--light-gray-color);
	padding-top: 100px;
	padding-right: 20px;
	padding-left: 20px;
	@media (max-width: $tab) {
		padding-top: 80px;
		margin-top: 80px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		h3 {
			color: var(--gray-color);
			text-transform: uppercase;
			font-weight: 500;
			font-size: 30px;
			line-height: 30px;
			@media (max-width: $tab) {
				font-size: 24px;
				line-height: 26px;
			}
		}
		.navigation {
			display: flex;
			align-items: center;
			gap: 1px;
			@media (max-width: $tab) {
				display: none;
			}
		}
	}
	.pagination {
		display: none;
		@media (max-width: $tab) {
			display: flex;
			justify-content: flex-start;
			margin-top: 20px;
			margin-bottom: 80px;
		}
	}
	.products-swiper {
		margin-bottom: 100px;
		margin-top: 90px;
		@media (max-width: $tab) {
			margin-bottom: 20px;
			margin-top: 35px;
		}
	}
}
</style>
