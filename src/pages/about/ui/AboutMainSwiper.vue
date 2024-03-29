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
	<div class="about-main-swiper-wrapper">
		<Swiper
			:slidesPerView="1"
			:spaceBetween="0"
			class="about-main-swiper"
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
				<p>{{ img.title }}</p>
			</SwiperSlide>
		</Swiper>
		<div class="navigation">
			<button ref="prev" class="nav"><ArrowLeftIcon /></button>
			<button ref="next" class="nav"><ArrowRightIcon /></button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about-main-swiper-wrapper {
	position: relative;
	max-width: 655px;
	.about-main-swiper {
		.image-wrapper {
			position: relative;
			padding-bottom: 75%;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
	.navigation {
		position: absolute;
		bottom: 0;
		right: 0;
		display: flex;
		align-items: center;
		gap: 1px;
		z-index: 2;
	}
}
</style>
