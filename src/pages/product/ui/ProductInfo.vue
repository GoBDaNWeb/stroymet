<script setup>
import { ref, watch } from 'vue';

import { ProductSwiper } from '@/entities/product-swiper';

import { AddToCart } from '@/features/add-to-cart';

import { useCartStore } from '@/entities/cart-store';

import { ArrowRightIcon, MinusIcon, PlusIcon } from '@/shared/icons';
import { Button, Select } from '@/shared/ui';

const props = defineProps(['product']);
const currentSlilde = ref(0);
const swiperRef = ref(null);
const currentColor = ref(0);
const count = ref(props.product.count);
const handleChangeCount = type => {
	if (type === 'inc') {
		count.value++;
	} else {
		if (count.value == 1) {
			return;
		}
		count.value--;
	}
};
const handleSelectColor = index => {
	currentColor.value = index;
};
</script>

<template>
	<div class="product-info container">
		<h1>{{ product.title }}</h1>
		<div class="product-info-content">
			<ProductSwiper :imgs="product.settings ? product.imgs[currentColor] : product.imgs" />
			<div v-if="product.settings" class="product-main-info">
				<h6>Артикул <span>DF9234756</span></h6>
				<div class="selectors">
					<h5>выбрать характеристики</h5>
					<div class="select-row">
						<div class="select-wrapper">
							<p>Ширина</p>
							<Select name="width" :options="product.width" />
						</div>
						<div class="select-wrapper">
							<p>Длина</p>
							<Select name="width" :options="product.length" />
						</div>
					</div>
					<div class="select-wrapper">
						<p>Тип покрытия</p>
						<Select name="width" :options="product.typeOfCoating" />
					</div>
				</div>
				<div class="colors">
					<h5>выбрать цвет</h5>
					<div class="colors-list">
						<div
							v-for="(color, index) in product.colors"
							@click="handleSelectColor(index)"
							:key="color.color"
							class="color-item"
							:class="currentColor === index ? 'active' : ''"
						>
							<div class="color-wrapper">
								<div :style="`background-color: ${color.color}`" class="color"></div>
							</div>
							<p>{{ color.title }}</p>
						</div>
					</div>
				</div>
			</div>
			<div v-else class="product-main-info">
				<h6>Артикул <span>DF9234756</span></h6>
				<ul>
					<li>
						<h6>Ширина</h6>
						<div class="line"></div>
						<span>35 мм</span>
					</li>
					<li>
						<h6>Длина</h6>
						<div class="line"></div>
						<span>50 мм</span>
					</li>
					<li>
						<h6>Высота</h6>
						<div class="line"></div>
						<span>50 мм</span>
					</li>
					<li>
						<h6>Толщина</h6>
						<div class="line"></div>
						<span>2 мм</span>
					</li>
					<li>
						<h6>Количество в упаковке</h6>
						<div class="line"></div>
						<span>50 шт</span>
					</li>
				</ul>
			</div>
			<div class="cost">
				<AddToCart
					:id="product.id"
					:text="product.title"
					:price="product.price"
					:img="product.settings ? product.imgs[currentColor][0] : product.imgs[0]"
					:url="product.url"
					:count="count"
					:changeCount="handleChangeCount"
					:isTotal="true"
				/>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.product-info {
	h1 {
		color: var(--gray-color);
		text-transform: uppercase;
		font-weight: 500;
		font-size: 40px;
		line-height: 40px;
		@media (max-width: $tab) {
			font-size: 30px;
			line-height: 30px;
		}
	}
	.product-info-content {
		margin-top: 50px;
		display: grid;
		grid-template-columns: 1fr 0.6fr 0.4fr;
		gap: 50px;
		@media (max-width: $desktop-sm) {
			gap: 20px;
		}
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			margin-top: 30px;
			gap: 30px;
		}
		.product-main-info {
			max-width: 350px;
			h6 {
				color: var(--gray-back-color);
				font-weight: 400;
				font-size: 14px;
				line-height: 18px;
				display: flex;
				align-items: center;
				gap: 15px;
				@media (max-width: $tab) {
					font-size: 11px;
					line-height: 14px;
				}
				span {
					color: var(--blue-color);
				}
			}
			.selectors {
				margin-top: 35px;

				h5 {
					font-weight: 500;
					color: var(--gray-color);
					font-size: 16px;
					line-height: 17px;
					margin-bottom: 20px;
					text-transform: uppercase;
					@media (max-width: $tab) {
						font-size: 11px;
						line-height: 14px;
					}
				}
				.select-row {
					@media (max-width: $tab) {
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						gap: 20px;
						margin-bottom: 15px;
					}
				}
				.select-wrapper {
					display: flex;
					flex-direction: column;
					gap: 10px;
					margin-top: 20px;
					position: relative;
					@media (max-width: $tab) {
						margin-top: 0;
					}
					&:nth-child(1) {
						z-index: 5;
					}
					&:nth-child(2) {
						z-index: 4;
					}
					&:nth-child(3) {
						z-index: 3;
					}
					&:nth-child(4) {
						z-index: 2;
					}
					p {
						color: var(--gray-back-color);
						font-size: 14px;
						line-height: 18px;
					}
				}
			}
			.colors {
				margin-top: 35px;
				h5 {
					font-weight: 500;
					color: var(--gray-color);
					font-size: 16px;
					line-height: 17px;
					margin-bottom: 20px;
					text-transform: uppercase;
				}
				.colors-list {
					display: grid;
					grid-template-columns: repeat(6, 1fr);
					gap: 20px;
					@media (max-width: $tab) {
						grid-template-columns: repeat(5, 1fr);
					}
					.color-item.active {
						.color-wrapper {
							border-color: var(--blue-color);
						}
					}
					.color-item {
						cursor: pointer;
						.color-wrapper {
							padding: 4px;
							border: 1px solid var(--light-gray-color);
							transition: var(--trs-300);
							display: flex;
							align-items: center;
							justify-content: center;
							.color {
								width: 30px;
								height: 30px;
								border: 1px solid var(--light-gray-color);
							}
						}
						p {
							font-size: 400px;
							font-size: 14px;
							line-height: 18px;
							color: var(--gray-color);
							text-align: center;
							margin-top: 5px;
						}
					}
				}
			}
			ul {
				display: flex;
				flex-direction: column;
				gap: 15px;
				margin-top: 35px;
				@media (max-width: $tab) {
					margin-top: 20px;
				}
				li {
					display: flex;
					align-items: baseline;
					h6 {
						font-size: 16px;
						line-height: 20px;
						white-space: nowrap;
						@media (max-width: $tab) {
							font-size: 14px;
							line-height: 18px;
						}
					}
					.line {
						width: 100%;
						height: 1px;
						background: var(--light-gray-color);
					}
					span {
						color: var(--gray-color);
						font-weight: 400;
						font-size: 16px;
						line-height: 20px;
						white-space: nowrap;
						@media (max-width: $tab) {
							font-size: 14px;
							line-height: 18px;
						}
					}
				}
			}
		}
		.cost {
			.total {
			}
			.buttons {
				margin-top: 51px;
				.counter {
					display: flex;
					align-items: center;
					justify-content: space-between;

					gap: 20px;

					span {
						margin-top: 0;
						font-weight: 400;
						font-size: 16px;
						line-height: 16px;
					}
				}
				.add {
					margin-top: 10px;
				}
			}
		}
	}
}
</style>
