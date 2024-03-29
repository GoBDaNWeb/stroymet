<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';

import { ArrowBottomIcon, ArrowTopIcon } from '@/shared/icons';

defineProps(['imgs']);

const modules = ref([Navigation, Thumbs]);

const prev = ref(null);
const next = ref(null);
const thumbsSwiper = ref(null);

const setThumbsSwiper = swiper => {
	thumbsSwiper.value = swiper;
};
</script>

<template>
	<div class="product-swiper-wrapper">
		<div class="product-thumbs-wrapper">
			<Swiper
				@swiper="setThumbsSwiper"
				:direction="'vertical'"
				:spaceBetween="15"
				:slidesPerView="5"
				:navigation="{
					prevEl: prev,
					nextEl: next
				}"
				:modules="modules"
				class="thumbs-product"
			>
				<SwiperSlide v-for="(img, index) in imgs" :key="index">
					<div class="image-wrapper">
						<img :src="img" />
					</div>
				</SwiperSlide>
			</Swiper>
			<div class="navigation">
				<button ref="prev"><ArrowTopIcon /></button>
				<button ref="next"><ArrowBottomIcon /></button>
			</div>
		</div>

		<Swiper
			:thumbs="{ swiper: thumbsSwiper }"
			:spaceBetween="10"
			:modules="modules"
			class="swiper-product"
		>
			<SwiperSlide v-for="(img, index) in imgs" :key="index">
				<div class="image-wrapper">
					<img :src="img" />
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style lang="scss" scoped>
.product-swiper-wrapper {
	display: flex;
	gap: 30px;
	max-height: 405px;
	width: 100%;
	max-width: 655px;
	.product-thumbs-wrapper {
		width: 100%;
		max-width: 85px;
		position: relative;
		.thumbs-product {
			width: 100%;
			height: 100%;
			padding: 2px;

			.swiper-slide-thumb-active {
				outline-color: var(--blue-color) !important;
			}
			.swiper-slide {
				height: auto !important;
				padding: 10px;
				cursor: pointer;
				transition: var(--trs-300);
				outline: 1px solid rgba(0, 0, 0, 0);

				.image-wrapper {
					padding-bottom: 100%;
					position: relative;
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						position: absolute;
					}
				}
			}
		}
		.navigation {
			position: absolute;
			top: 0;
			bottom: 0;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			z-index: 2;
			width: 100%;
			pointer-events: none;
			button.swiper-button-disabled {
				opacity: 0;
			}
			button {
				transition: var(--trs-300);
				display: flex;
				align-items: center;
				justify-content: center;
				background: var(--blue-color);
				height: 35px;
				width: 100%;
				pointer-events: all;
			}
		}
	}

	.swiper-product {
		width: 100%;
		border: 1px solid var(--light-gray-color);
		padding: 15px;

		.swiper-slide {
			.image-wrapper {
				padding-bottom: 75%;
				position: relative;
				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
					position: absolute;
				}
			}
		}
	}
}
</style>
