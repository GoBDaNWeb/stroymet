<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { Fancybox } from '@/widgets/fancybox';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';

defineProps(['imgs']);

const modules = ref([Navigation, Pagination]);

const prev = ref(null);
const next = ref(null);
const pagination = ref(null);
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
		<Fancybox>
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
					<a data-fancybox="production" :href="img" class="image-wrapper">
						<img :src="img" alt="photo" />
					</a>
				</SwiperSlide>
			</Swiper>
		</Fancybox>

		<div ref="pagination" class="pagination"></div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.production-about {
	margin-top: 140px;
	overflow: hidden;
	@media (max-width: $tab) {
		margin-top: 80px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		@media (max-width: $tab) {
			flex-direction: column;
			gap: 20px;
		}
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
		}
	}
	.pagination {
		display: none;
		@media (max-width: $tab) {
			display: flex;
			justify-content: flex-start;
			padding-left: 20px;
			margin-top: 20px;
		}
	}
	.production-about-swiper {
		overflow: visible;
		margin-top: 90px;
		@media (max-width: $tab) {
			margin-top: 30px;
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 65%;
			display: block;
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
