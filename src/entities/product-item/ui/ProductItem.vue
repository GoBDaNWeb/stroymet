<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, reactive, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { AddToCart } from '@/features/add-to-cart';

import { useCartStore } from '@/entities/cart-store';

import { ArrowRightIcon, MinusIcon, PlusIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const props = defineProps([
	'id',
	'imgs',
	'price',
	'text',
	'url',
	'count',
	'width',
	'length',
	'type'
]);
const modules = ref([Pagination]);

const cart = useCartStore();
const currentSlilde = ref(0);
const swiperRef = ref(null);
const pagination = ref(null);
let currentProduct = reactive({ product: null });
const count = ref(props.count || 1);

const setSwiperRef = swiper => {
	swiperRef.value = swiper;
};
const handleSetSlide = slide => {
	currentSlilde.value = slide;
};

const handleChangeCount = type => {
	if (type === 'inc') {
		if (cart.getProduct(props.id)) {
			cart.increaceProductCount(props.id);
		} else {
			count.value++;
		}
	} else {
		if (count.value == 1) {
			return;
		}
		if (cart.getProduct(props.id)) {
			cart.decreaceProductCount(props.id);
		} else {
			count.value--;
		}
	}
};

watch(currentSlilde, () => {
	swiperRef.value.slideTo(currentSlilde.value);
});
onMounted(() => {
	const filteredProduct = cart.cartProducts.filter(product => {
		return product.id === props.id;
	});
	currentProduct.product = filteredProduct[0];
});
</script>

<template>
	<div class="product-item">
		<div class="swiper-product-wrapper">
			<Swiper
				:slidesPerView="1"
				:spaceBetween="10"
				class="product-swiper"
				@swiper="setSwiperRef"
				:modules="modules"
				:pagination="{
					el: pagination,
					clickable: true
				}"
			>
				<SwiperSlide v-for="(img, index) in imgs" :key="index">
					<div class="image-wrapper">
						<img :src="img" alt="product" />
					</div>
				</SwiperSlide>
			</Swiper>

			<div class="hidden-lines">
				<RouterLink
					@mouseenter="handleSetSlide(index)"
					class="line"
					v-for="(_, index) in imgs"
					:to="url"
					:key="index"
					:data-slide="index"
				></RouterLink>
			</div>
			<div ref="pagination" class="pagination"></div>
		</div>

		<span>{{ price * count }} руб.</span>
		<p>{{ text }}</p>
		<AddToCart
			:id="id"
			:text="text"
			:price="price"
			:img="imgs[0]"
			:url="url"
			:count="currentProduct.product ? currentProduct.product.count : count"
			:changeCount="handleChangeCount"
			:width="width"
			:length="length"
			:type="type"
		/>
	</div>
</template>

<style lang="scss">
.product-item {
	button {
		svg {
			path {
				stroke: var(--blue-color);
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.product-item {
	position: relative;
	.swiper-product-wrapper {
		position: relative;
		.hidden-lines {
			position: absolute;
			top: 0;
			left: 0;
			align-items: center;
			width: 100%;
			height: 100%;
			// display: grid;
			// justify-content: center;
			// grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
			display: flex;
			z-index: 2;
			.line {
				width: 100%;
				height: 100%;
			}
		}
	}
	.product-swiper {
		width: 100%;
		max-width: 225px;
		@media (max-width: $tab) {
			max-width: 150px;
		}
	}

	.image-wrapper {
		position: relative;
		padding-bottom: 100%;
		display: block;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	span {
		color: var(--gray-color);
		font-weight: 400;
		font-size: 18px;
		line-height: 18px;
		text-transform: uppercase;
		display: block;
		margin-top: 20px;
		@media (max-width: $tab) {
			font-size: 16px;
			line-height: 16px;
		}
	}
	p {
		font-weight: 400;
		font-size: 18px;
		line-height: 20px;
		color: var(--gray-color);
		margin-top: 20px;
		@media (max-width: $tab) {
			font-size: 14px;
			line-height: 16px;
			margin-top: 10px;
		}
	}
}
</style>
