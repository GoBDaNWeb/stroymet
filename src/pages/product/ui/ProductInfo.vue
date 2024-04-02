<script setup>
import { ref, watch } from 'vue';

import { ProductSwiper } from '@/entities/product-swiper';

import { AddToCart } from '@/features/add-to-cart';

import { useCartStore } from '@/entities/cart-store';

import { ArrowRightIcon, MinusIcon, PlusIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const props = defineProps(['id', 'title', 'count', 'imgs', 'text', 'url', 'price']);
// import { setProductCart } from '@/shared/helpers';
const currentSlilde = ref(0);
const swiperRef = ref(null);
const count = ref(props.count);
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
</script>

<template>
	<div class="product-info container">
		<h1>{{ title }}</h1>
		<div class="product-info-content">
			<ProductSwiper :imgs="imgs" />
			<div class="product-main-info">
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
					:id="id"
					:text="title"
					:price="price"
					:img="imgs[0]"
					:url="url"
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
		font-weight: 400;
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
