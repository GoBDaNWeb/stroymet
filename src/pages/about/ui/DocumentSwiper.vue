<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { ArrowBottomIcon, ArrowLeftIcon, ArrowRightIcon, DoubleFileIcon } from '@/shared/icons';

const props = defineProps(['documentsList']);
const modules = ref([Navigation, Pagination]);

const prev = ref(null);
const next = ref(null);
const pagination = ref(null);
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
			:pagination="{
				el: pagination,
				clickable: true
			}"
			:modules="modules"
			:breakpoints="{
				0: {
					slidesPerView: 1.2
				},
				767: {
					slidesPerView: 2
				}
			}"
		>
			<SwiperSlide v-for="document in documentsList" :key="document.id">
				<DoubleFileIcon />
				<div class="content">
					<h4>{{ document.title }}</h4>
					<Button><ArrowBottomIcon />скачать</Button>
				</div>
			</SwiperSlide>
		</Swiper>
		<div ref="pagination" class="pagination"></div>
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
@import '@/shared/styles/vars';

.documents {
	margin-top: 116px;
	@media (max-width: $tab) {
		margin-top: 80px;
		margin-bottom: 80px;
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
			@media (max-width: $tab) {
				padding: 30px 20px;
			}
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
					@media (max-width: $tab) {
						font-size: 16px;
						line-height: 19px;
					}
				}
				button {
					color: var(--blue-color);
					font-weight: 400;
					font-size: 14px;
					line-height: 14px;
					display: flex;
					align-items: center;
					gap: 10px;
					@media (max-width: $tab) {
						font-size: 14px;
						line-height: 14px;
					}
				}
			}
		}
	}
	.pagination {
		display: none;
		@media (max-width: $tab) {
			display: flex;
			justify-content: flex-start;
			margin-top: 10px;
			padding-left: 20px;
		}
	}
}
</style>
