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
	<div class="production-about">
		<div class="top container">
			<h3>наше производство</h3>
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
			class="production-about-swiper"
			:navigation="{
				prevEl: prev,
				nextEl: next
			}"
			:modules="modules"
		>
			<SwiperSlide v-for="(img, index) in imgs" :key="index">
				<div class="image-wrapper">
					<img :src="img" alt="photo" />
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style lang="scss" scoped>
.production-about {
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
	.production-about-swiper {
		overflow: visible;
		margin-top: 90px;

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
