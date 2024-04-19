<script setup>
import { ref, watch, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import { CartProduct } from '@/entities/cart-product';
import { useCartStore } from '@/entities/cart-store';
import { useModalStore } from '@/entities/modal-store';

import { ArrowLeftIcon } from '@/shared/icons';
import { Button, Input } from '@/shared/ui';

const modal = useModalStore();

const router = useRouter();
const cart = useCartStore();

const name = ref('');
const nameError = ref(false);
const phone = ref('');
const phoneError = ref(false);
const specificationsProduct = ref([]);
const handleSetError = () => {
	name.value.length === 0 ? (nameError.value = true) : (nameError.value = false);
	phone.value.length === 0 ? (phoneError.value = true) : (phoneError.value = false);
	return;
};

const handleSuccessModal = () => {
	if (!nameError.value && !phoneError.value) {
		modal.handleOpenSuccessModal();
	}
};

const handleClearError = type => {
	if (type === 'tel') {
		phoneError.value = false;
	} else {
		nameError.value = false;
	}
};

onMounted(() => {
	const filtered = cart.cartProducts.filter(product => {
		return product.width && product.length && product.thickness;
	});
	specificationsProduct.value = filtered;
})
watch(() => cart.cartProducts, () => {
	const filtered = cart.cartProducts.filter(product => {
		return product.width && product.length && product.thickness;
	});
	specificationsProduct.value = filtered;
});

</script>

<template>
	<div class="cart container">
		<h1>корзина</h1>

		<div class="cart-inner">
			<div class="cart-content">
				<div v-if="cart.getProductsCount > 0" class="cart-list">
					<CartProduct
						v-for="product in cart.cartProducts"
						:key="product.id"
						:id="product.id"
						:img="product.img"
						:title="product.title"
						:price="product.price"
						:count="product.count"
						:url="product.url"
						:width="product.width"
						:length="product.length"
						:thickness="product.thickness"
					/>
				</div>
				<div v-else class="cart-alert">
					<h6>В вашей корзине ещё нет товаров</h6>
					<Button variable="primary" @click="router.push('/catalog')">перейти в каталог</Button>
				</div>
			</div>
			<div class="cart-info-wrapper">
				<div class="cart-info">
					<div class="total">
						<h5>итого:</h5>
						<div class="line"></div>
						<h5 v-if="specificationsProduct.length > 0">от {{ cart.getTotalPrice }} руб.</h5>
						<h5 v-else>{{ cart.getTotalPrice }} руб.</h5>
					</div>
					<form
						@submit.prevent="handleSuccessModal"
						class="order-form"
						:class="cart.getProductsCount > 0 ? '' : 'disabled'"
					>
						<div class="inputs">
							<Input
								v-model="name"
								@input="handleClearError('name')"
								:error="nameError"
								placeholder="Ваше имя"
							/>
							<Input
								v-model="phone"
								@input="handleClearError('tel')"
								:error="phoneError"
								type="tel"
								placeholder="Телефон"
							/>
						</div>
						<p>
							Нажимая кнопку «Отправить» вы даёте своё согласие с
							<a href="#">правилами обработки персональных данных</a>
						</p>
						<Button @click="handleSetError" variable="primary"> оформить заказ </Button>
					</form>
					<RouterLink v-if="cart.getProductsCount > 0" to="/catalog">
						<ArrowLeftIcon />
						в каталог
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.cart {
	.cart-inner {
		.cart-info-wrapper {
			.cart-info {
				& > a {
					svg {
						path {
							stroke: var(--blue-color);
						}
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.cart {
	margin-bottom: 100px;
	@media (max-width: $tab) {
		margin-bottom: 80px;
	}
	h1 {
		color: var(--gray-color);
		font-weight: 500;
		font-size: 40px;
		line-height: 40px;
		text-transform: uppercase;
	}
	.cart-inner {
		display: grid;
		gap: 145px;
		margin-top: 70px;
		position: relative;
		grid-template-columns: 1fr 0.4fr;
		@media (max-width: $desktop-sm) {
			gap: 50px;
		}
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			margin-top: 30px;
		}
		.cart-content {
			.cart-alert {
				margin-top: 47px;
				max-width: 312px;
				h6 {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 18px;
					line-height: 23px;
					margin-bottom: 20px;
				}
			}
		}
		.cart-info-wrapper {
			position: relative;
			height: 100%;
			.cart-info {
				align-self: flex-start;
				position: sticky;
				top: 100px;
				.total {
					display: flex;
					align-items: baseline;
					h5 {
						color: var(--gray-color);
						font-weight: 400;
						font-size: 24px;
						line-height: 26px;
						text-transform: uppercase;
						white-space: nowrap;
						@media (max-width: $tab) {
							font-size: 20px;
							line-height: 22px;
						}
					}
					.line {
						width: 100%;
						height: 1px;
						background: var(--light-gray-color);
					}
				}
				.order-form.disabled {
					pointer-events: none;
					opacity: 0.5;
				}
				.order-form {
					margin-top: 50px;
					margin-bottom: 55px;
					@media (max-width: $tab) {
						margin-top: 30px;
						margin-bottom: 30px;
					}
					.inputs {
						display: flex;
						flex-direction: column;
						gap: 20px;
						input::placeholder {
							color: var(--gray-back-color);
							opacity: 1;
						}
						input {
							border-color: var(--light-gray-color);
							height: 50px;
							color: var(--gray-color);
						}
					}
					p {
						margin-top: 20px;
						margin-bottom: 20px;
						font-size: 12px;
						line-height: 15px;
						font-weight: 400;
						color: var(--light2-gray-color);
						@media (max-width: $tab) {
							font-size: 11px;
							line-height: 14px;
						}
						a {
							color: var(--blue-color);
						}
					}
					button {
						text-transform: uppercase;
						height: 50px;
					}
				}
				& > a {
					color: var(--blue-color);
					font-weight: 400;
					line-height: 14px;
					font-size: 14px;
					display: flex;
					align-items: center;
					text-transform: uppercase;
					gap: 10px;
				}
			}
		}
	}
}
</style>
