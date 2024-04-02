<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';

defineProps(['imgs']);

const modules = ref([Navigation, Pagination]);

const prev = ref(null);
const next = ref(null);
const pagination = ref(null);
</script>

<template>
	<div class="production">
		<div class="top container">
			<h3>реализация нашей продукции</h3>
			<div class="navigation">
				<button ref="prev" class="nav"><ArrowLeftIcon /></button>
				<button ref="next" class="nav"><ArrowRightIcon /></button>
			</div>
		</div>
		<Swiper
			:loop="true"
			:centeredSlides="true"
			:slidesPerView="3.2"
			:spaceBetween="10"
			class="production-swiper"
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
					slidesPerView: 1.2,
					centeredSlides: false
				},
				767: {
					slidesPerView: 2.2
				},
				1024: {
					centeredSlides: true,
					slidesPerView: 3.2
				}
			}"
		>
			<SwiperSlide v-for="(img, index) in imgs" :key="index">
				<div class="image-wrapper">
					<img :src="img.img" alt="photo" />
				</div>
				<p>{{ img.title }}</p>
			</SwiperSlide>
		</Swiper>
		<div ref="pagination" class="pagination"></div>
	</div>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.production-swiper {
	.swiper-slide-active {
		transform: scale(1.3);
		z-index: 2;
		transition: var(--trs-300);
		@media (max-width: $tab) {
			transform: scale(1);
		}

		p {
			opacity: 1;
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.production {
	margin-top: 140px;
	overflow: hidden;
	@media (max-width: $tab) {
		margin-top: 80px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		h3 {
			color: var(--gray-color);
			text-transform: uppercase;
			font-weight: 400;
			font-size: 50px;
			line-height: 50px;
			@media (max-width: $tab) {
				font-size: 30px;
				line-height: 30px;
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
			padding-left: 20px;
		}
	}
	.production-swiper {
		margin-bottom: 100px;
		overflow: visible;
		margin-top: 90px;
		@media (max-width: $tab) {
			padding-left: 20px;
			margin-top: 35px;
			margin-bottom: 20px;
		}
		.swiper-slide-active {
			p {
				opacity: 1 !important;
			}
		}
		.swiper-slide {
			transition: var(--trs-300);
			transition-delay: 0;
			p {
				opacity: 0;
				transition: var(--trs-300);
				text-transform: uppercase;
				color: var(--gray-color);
				font-weight: 400;
				font-size: 14px;
				line-height: 14px;
				margin-top: 20px;
				@media (max-width: $tab) {
					font-size: 16px;
					line-height: 16px;
				}
			}
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 65%;
			@media (max-width: $tab) {
				padding-bottom: 75%;
			}
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
