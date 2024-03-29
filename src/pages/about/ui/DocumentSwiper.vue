<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { ArrowBottomIcon, ArrowLeftIcon, ArrowRightIcon, DoubleFileIcon } from '@/shared/icons';

const props = defineProps(['documentsList']);
console.log(props);
const modules = ref([Navigation]);

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="documents">
		<div class="top container">
			<h3>документы</h3>
			<div class="navigation">
				<button ref="prev" class="nav"><ArrowLeftIcon /></button>
				<button ref="next" class="nav"><ArrowRightIcon /></button>
			</div>
		</div>
		<Swiper
			:slidesPerView="2"
			:spaceBetween="10"
			class="documents-swiper"
			:navigation="{
				prevEl: prev,
				nextEl: next
			}"
			:modules="modules"
		>
			<SwiperSlide v-for="document in documentsList" :key="document.id">
				<DoubleFileIcon />
				<div class="content">
					<h4>{{ document.title }}</h4>
					<Button><ArrowBottomIcon />скачать</Button>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style lang="scss">
.documents {
	.documents-swiper {
		.swiper-slide {
			button {
				svg {
					width: 20px;
					height: 20px;
					path {
						stroke: var(--blue-color);
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.documents {
	margin-top: 116px;
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
	.documents-swiper {
		border-top: 1px solid var(--light-gray-color);
		border-bottom: 1px solid var(--light-gray-color);
		margin-top: 44px;
		.swiper-slide {
			border-right: 1px solid var(--light-gray-color);
			padding: 50px;
			display: flex;
			align-items: center;
			gap: 30px;
			height: auto;
			.content {
				display: flex;
				flex-direction: column;
				gap: 20px;
				h4 {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 20px;
					line-height: 22px;
					text-transform: uppercase;
				}
				button {
					color: var(--blue-color);
					font-weight: 400;
					font-size: 14px;
					line-height: 14px;
					display: flex;
					align-items: center;
					gap: 10px;
				}
			}
		}
	}
}
</style>
