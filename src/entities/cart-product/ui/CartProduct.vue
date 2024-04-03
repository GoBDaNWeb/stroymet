<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { useCartStore } from '@/entities/cart-store';

import { MinusIcon, PlusIcon, RemoveIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const props = defineProps([
	'id',
	'img',
	'title',
	'price',
	'count',
	'url',
	'width',
	'length',
	'type',
	'color'
]);
const count = ref(props.count);
const cartStore = useCartStore();

const handleChangeCount = type => {
	if (type === 'inc') {
		count.value++;
		cartStore.increaceProductCount(props.id);
	} else {
		if (count.value == 1) {
			return;
		}
		count.value--;
		cartStore.decreaceProductCount(props.id);
	}
};

const handleRemoveProduct = () => {
	cartStore.removeProduct(props.id);
};

const conditionSettings = props.width && props.length && props.type && props.color;
</script>

<template>
	<div class="cart-product">
		<RouterLink :to="url" class="image-wrapper">
			<img :src="img" alt="product" />
		</RouterLink>
		<div class="product-info">
			<h6 class="info">{{ title }}</h6>
			<ul class="settings" v-if="conditionSettings">
				<li>
					<span>Ширина общая</span>
					<p>{{ width }}</p>
				</li>
				<li>
					<span>Длина</span>
					<p>{{ length }}</p>
				</li>
				<li>
					<span>Тип покрытия</span>
					<p>{{ type }}</p>
				</li>
				<li>
					<span>Цвет</span>
					<div class="color-item">
						<div class="color-wrapper">
							<div :style="`background-color: ${color.color}`" class="color"></div>
						</div>
						<p>
							{{ color.title }}
						</p>
					</div>
				</li>
			</ul>
			<div class="counter-wrapper">
				<span>{{ price }} руб./шт.</span>
				<div class="counter">
					<Button variable="count" @click="handleChangeCount('dec')">
						<MinusIcon />
					</Button>
					<span>{{ count }}</span>
					<Button variable="count" @click="handleChangeCount('inc')">
						<PlusIcon />
					</Button>
				</div>
				<span> {{ price * count }} руб. </span>
			</div>
		</div>
		<Button variable="remove" @click="handleRemoveProduct"><RemoveIcon /></Button>
	</div>
</template>

<style lang="scss">
.cart-product {
	& > button {
		transition: var(--trs-300);
		svg {
			path {
				transition: var(--trs-300);
			}
		}
		&:hover {
			border-color: var(--blue-hover-color);

			svg {
				path {
					stroke: var(--blue-hover-color);
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.cart-product {
	display: grid;
	grid-template-columns: 0.2fr 1fr 0.2fr;
	align-items: center;
	gap: 30px;
	position: relative;
	border-top: 1px solid var(--light-gray-color);
	padding-top: 20px;
	padding-bottom: 20px;
	&:last-child {
		border-bottom: 1px solid var(--light-gray-color);
	}
	@media (max-width: $tab) {
		grid-template-columns: 0.4fr 1fr 0fr;
	}
	.image-wrapper {
		position: relative;
		padding-bottom: 100%;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.product-info {
		.info {
			font-weight: 400;
			font-size: 18px;
			line-height: 20px;
			color: var(--gray-color);
			@media (max-width: $tab) {
				font-size: 14px;
				line-height: 16px;
			}
		}
		.settings {
			margin-top: 15px;
			display: flex;
			flex-direction: column;
			gap: 5px;
			li {
				display: grid;
				grid-template-columns: 0.3fr 1fr;
				gap: 5px;
				@media (max-width: $tab-sm) {
					grid-template-columns: 0.6fr 1fr;
				}
				@media (max-width: $mob) {
					grid-template-columns: 1fr 1fr;
				}
				span {
					color: var(--gray-back-color);
					font-weight: 400;
					font-size: 14px;
					line-height: 18px;
					white-space: nowrap;
					width: 100%;
					display: block;
					@media (max-width: $mob) {
						min-width: 100px;
					}
				}
				p {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 14px;
					line-height: 18px;
					white-space: nowrap;
				}
				.color-item {
					width: fit-content;
					.color-wrapper {
						width: 43px;
						height: 43px;
						border: 1px solid var(--light-gray-color);
						padding: 5px;
						.color {
							width: 100%;
							height: 100%;
						}
					}
					p {
						margin-top: 5px;
						text-align: center;
					}
				}
			}
		}
		.counter-wrapper {
			margin-top: 30px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			align-items: center;
			justify-content: space-between;
			@media (max-width: $tab) {
				grid-template-columns: 1fr;
				justify-content: center;
				gap: 15px;
			}
			span {
				color: var(--gray-color);
				font-size: 18px;
				line-height: 18px;
				font-weight: 400;
				text-align: left;
				display: block;
				&:last-child {
					text-align: center;
					@media (max-width: $tab) {
						text-align: left;
					}
				}
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 14px;
					text-align: left;
				}
			}
			.counter {
				display: flex;
				align-items: center;
				justify-content: space-between;
				max-width: 170px;
				width: 100%;

				span {
					font-weight: 400;
					font-size: 16px;
					line-height: 16px;
					color: var(--gray-color);
				}
			}
		}
	}
	& > button {
		position: absolute;
		top: 20px;
		right: 0;
	}
}
</style>
