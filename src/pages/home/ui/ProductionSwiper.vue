<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';

defineProps(['imgs']);

const modules = ref([Navigation]);

const prev = ref(null);
const next = ref(null);
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
			:modules="modules"
		>
			<SwiperSlide v-for="(img, index) in imgs" :key="index">
				<div class="image-wrapper">
					<img :src="img.img" alt="photo" />
				</div>
				<p>{{ img.title }}</p>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style lang="scss">
.production-swiper {
	.swiper-slide-active {
		transform: scale(1.3);
		z-index: 2;
		transition: var(--trs-300);
		p {
			opacity: 1;
		}
	}
}
</style>
<style lang="scss" scoped>
.production {
	margin-top: 140px;
	overflow: hidden;
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
	.production-swiper {
		margin-bottom: 100px;
		overflow: visible;
		margin-top: 90px;
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
			}
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 65%;
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
