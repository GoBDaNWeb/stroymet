<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';

defineProps(['reviewsList']);

const modules = ref([Navigation, Pagination]);

const prev = ref(null);
const next = ref(null);
const pagination = ref(null);
</script>

<template>
	<div class="reviews">
		<div class="top container">
			<h3>Отзывы</h3>
			<div class="navigation">
				<button ref="prev" class="nav"><ArrowLeftIcon /></button>
				<button ref="next" class="nav"><ArrowRightIcon /></button>
			</div>
		</div>
		<Swiper
			:slidesPerView="2"
			:spaceBetween="10"
			class="reviews-swiper"
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
					slidesPerView: 1
				},
				767: {
					slidesPerView: 2
				}
			}"
		>
			<SwiperSlide v-for="review in reviewsList" :key="review.id">
				<div class="user">
					<div class="user-avatar">
						<img v-if="review.avatar" :src="review.avatar" alt="avatar" />
						<p v-else>{{ review.name[0] }}{{ review.lastname[0] }}</p>
					</div>
					<div class="user-info">
						<div class="user-name">{{ review.name }} {{ review.lastname }}</div>
						<div class="user-city">
							{{ review.city }}
						</div>
					</div>
				</div>
				<p>
					{{ review.text }}
				</p>
			</SwiperSlide>
		</Swiper>
		<div ref="pagination" class="pagination"></div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.reviews {
	margin-top: 120px;
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
		}
	}
	.pagination {
		display: none;
		margin-top: 20px;
		@media (max-width: $tab) {
			display: flex;
			justify-content: flex-start;
			padding-left: 20px;
		}
	}
	.reviews-swiper {
		border-top: 1px solid var(--light-gray-color);
		border-bottom: 1px solid var(--light-gray-color);
		margin-top: 44px;
		.swiper-slide {
			border-right: 1px solid var(--light-gray-color);
			padding: 50px;
			display: flex;
			flex-direction: column;
			gap: 30px;
			height: auto;
			@media (max-width: $tab) {
				padding: 33px 20px;
				gap: 15px;
			}
			.user {
				display: flex;
				align-items: center;
				gap: 20px;
				@media (max-width: $tab) {
					gap: 10px;
				}
				.user-avatar {
					width: 75px;
					height: 75px;
					border-radius: 999px;
					border: 1px solid var(--light-gray-color);
					display: flex;
					align-items: center;
					justify-content: center;
					@media (max-width: $tab) {
						width: 55px;
						height: 55px;
					}
					p {
						color: var(--blue-color);
						line-height: 26px;
						font-size: 29px;
						font-weight: 400;
						@media (max-width: $tab) {
							font-size: 20px;
							line-height: 20px;
						}
					}
				}
				.user-info {
					display: flex;
					flex-direction: column;
					gap: 15px;

					.user-name {
						color: var(--gray-color);
						font-weight: 400;
						font-size: 20px;
						line-height: 22px;
						@media (max-width: $tab) {
							font-size: 16px;
							line-height: 19px;
						}
					}
					.user-city {
						font-weight: 400;
						color: var(--light2-gray-color);
						font-size: 14px;
						line-height: 18px;
						@media (max-width: $tab) {
							font-size: 11px;
							line-height: 14px;
						}
					}
				}
			}
			p {
				color: var(--gray-color);
				font-weight: 350;
				font-size: 18px;
				line-height: 23px;
				@media (max-width: $tab) {
					font-size: 16px;
					line-height: 20px;
				}
			}
		}
	}
}
</style>
