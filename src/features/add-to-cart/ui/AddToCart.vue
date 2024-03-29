<script setup>
import { useCartStore } from '@/entities/cart-store';

import { ArrowRightIcon, MinusIcon, PlusIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const props = defineProps(['id', 'text', 'price', 'img', 'url', 'count', 'changeCount', 'isTotal']);
const cartStore = useCartStore();

const handleSetProduct = () => {
	const product = {
		id: props.id,
		title: props.text,
		price: props.price,
		img: props.img,
		url: props.url,
		count: props.count
	};
	cartStore.setProduct(product);
	localStorage.setItem('products', JSON.stringify([...cartStore.cartProducts]));
};

const handleRemoveProduct = () => {
	cartStore.removeProduct(props.id);
	localStorage.setItem('products', JSON.stringify([...cartStore.cartProducts]));
};

const isInCart = () => {
	return cartStore.cartProducts.find(cartProduct => {
		return cartProduct.id === props.id;
	});
};
</script>

<template>
	<div class="add-to-cart">
		<span class="total" v-if="isTotal">{{ price * count }} руб.</span>
		<div class="buttons">
			<div class="counter">
				<Button variable="count" @click="changeCount('dec')">
					<MinusIcon />
				</Button>
				<span>{{ count }}</span>
				<Button variable="count" @click="changeCount('inc')">
					<PlusIcon />
				</Button>
			</div>
			<div class="add">
				<Button v-if="isInCart()" variable="primary" @click="handleRemoveProduct">
					убрать из корзины
				</Button>
				<Button v-else variable="primary" @click="handleSetProduct"> в корзину </Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.add-to-cart {
	.total {
		color: var(--gray-color);
		font-size: 24px;
		line-height: 31px;
		font-weight: 400;
	}
	.buttons {
		margin-top: 51px;
		.counter {
			display: flex;
			align-items: center;
			justify-content: space-between;

			gap: 20px;

			span {
				color: var(--gray-color);
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
</style>
