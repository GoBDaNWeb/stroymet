<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { useCartStore } from '@/entities/cart-store';

import { MinusIcon, PlusIcon, RemoveIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const props = defineProps(['id', 'img', 'title', 'price', 'count', 'url']);
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
</script>

<template>
	<div class="cart-product">
		<RouterLink :to="url" class="image-wrapper">
			<img :src="img" alt="product" />
		</RouterLink>
		<div class="product-info">
			<h6 class="info">{{ title }}</h6>
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
				text-align: center;
				display: block;
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
