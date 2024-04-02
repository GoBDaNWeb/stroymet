<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useCartStore } from '@/entities/cart-store';
import { useMenuStore } from '@/entities/menu-store';

import { links } from '@/shared/config';
import { CartIcon, LogoIcon, LogoMob, WhatsappIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const cart = useCartStore();
const menu = useMenuStore();
const route = useRoute();
const active = ref(false);
const controlNavbar = () => {
	if (typeof window !== 'undefined') {
		if (window.scrollY > 0) {
			active.value = true;
		} else {
			active.value = false;
		}
	}
};

watch(route, () => {
	if (route.path !== '/' && route.path !== '/about' && route.name !== 'not-found') {
		active.value = true;
		window.removeEventListener('scroll', controlNavbar);
	} else {
		active.value = false;
		window.addEventListener('scroll', controlNavbar);
	}
});
onMounted(() => {
	if (route.path !== '/' && route.path !== '/about' && route.name !== 'not-found') {
		active.value = true;
		window.removeEventListener('scroll', controlNavbar);
	} else {
		active.value = false;
		window.addEventListener('scroll', controlNavbar);
	}
});
</script>

<template>
	<header class="header" :class="{ active: active }">
		<button @click="menu.handleOpenMenu" class="burger">
			<span></span>
		</button>
		<div class="container">
			<div class="header-inner">
				<RouterLink to="/" class="logo">
					<LogoIcon />
				</RouterLink>
				<RouterLink to="/" class="logo-mob">
					<LogoMob />
				</RouterLink>
				<nav class="navigation">
					<RouterLink :to="link.url" v-for="(link, index) in links" :key="index">
						{{ link.title }}
					</RouterLink>
				</nav>
				<div class="social">
					<a href="tel:8 800 123-45-67">8 800 123-45-67</a>
					<a href="#" target="_blank">
						<WhatsappIcon />
						<p>написать <br />в whatsapp</p>
					</a>
				</div>
			</div>
		</div>
		<RouterLink to="/cart" class="cart-btn">
			<div v-if="cart.getProductsCount > 0" class="count-cart">
				{{ cart.getProductsCount }}
			</div>
			<CartIcon />
		</RouterLink>
	</header>
</template>

<style lang="scss">
.header.active {
	.header-inner {
		.logo {
			svg {
				.change-color {
					fill: var(--gray-back-color);
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.header.active {
	background: var(--white-color);
	border-color: var(--light-gray-color);
	.header-inner {
		.logo {
			border-color: var(--light-gray-color);
		}
		.navigation {
			a {
				color: var(--gray-color);
			}
		}
		.social {
			border-color: var(--light-gray-color);
			a {
				color: var(--gray-color);
			}
		}
	}
}
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	border-bottom: 1px solid var(--border-color);
	display: flex;
	justify-content: flex-end;
	transition: var(--trs-300);
	z-index: 100;
	& > button {
		width: 70px;
		height: auto;
		background: var(--blue-color);
	}
	.cart-btn {
		width: 70px;
		background: var(--blue-color);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		transition: var(--trs-300);
		&:hover {
			background: var(--blue-hover-color);
		}
		@media (max-width: $desktop-sm) {
			min-width: 50px;
			max-width: 50px;
			max-height: 50px;
			min-height: 50px;
		}
		.count-cart {
			position: absolute;
			font-size: 11px;
			line-height: 11px;
			font-weight: 400;
			width: 15px;
			height: 15px;
			border-radius: 999px;
			background: var(--white-color);
			color: var(--gray-color);
			top: 22px;
			right: 15px;
			display: flex;
			align-items: center;
			justify-content: center;

			@media (max-width: $desktop-sm) {
				top: 8px;
				right: 4px;
			}
		}
	}
	.burger {
		width: 50px;
		height: 50px;
		min-width: 50px;
		min-height: 50px;
		background: var(--gray-back-color);
		display: none;
		align-items: center;
		justify-content: center;
		position: relative;
		@media (max-width: $desktop-sm) {
			display: flex;
		}
		span {
			width: 20px;
			height: 1px;
			background: var(--white-color);
		}
		&:after {
			content: '';
			position: absolute;
			width: 20px;
			height: 1px;
			background: var(--white-color);
			top: 20px;
		}
		&:before {
			content: '';
			position: absolute;
			width: 20px;
			height: 1px;
			background: var(--white-color);
			bottom: 20px;
		}
	}
	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;

		.logo-mob {
			display: none;
			padding: 0 15px 0 0;
			border-right: 1px solid var(--border-color);
			height: 100%;
			align-items: center;
			@media (max-width: $tab) {
				display: flex;
			}
		}
		.logo {
			padding: 12px 50px 12px 0;
			border-right: 1px solid var(--border-color);
			svg {
				width: 100%;
				height: 100%;
			}
			@media (max-width: $desktop-sm) {
				height: 40px;
				padding: 0 50px 0 0;
			}
			@media (max-width: $tab) {
				display: none;
			}
		}
		.navigation {
			display: flex;
			align-items: center;
			gap: 50px;
			@media (max-width: $desktop-sm) {
				display: none;
			}
			a {
				font-weight: 400;
				font-size: 14px;
				line-height: 12px;
				color: var(--white-color);
				text-transform: uppercase;
				transition: var(--trs-300);
			}
		}
		.social {
			padding: 12px 0 12px 50px;
			height: 100%;
			border-left: 1px solid var(--border-color);
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 25%;
			@media (max-width: $desktop-sm) {
				width: 300px;
				border-left: none;
				padding: 10px 0 10px 0;
			}
			@media (max-width: $tab) {
				width: auto;
				gap: 10px;
			}
			a {
				display: flex;
				align-items: center;
				gap: 10px;
				color: var(--white-color);
				transition: var(--trs-300);
				font-weight: 400;
				font-size: 16px;
				line-height: 14px;
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 18px;
				}
				p {
					color: var(--green-color);
					font-weight: 400;
					font-size: 11px;
					line-height: 10px;
					text-transform: uppercase;
					@media (max-width: $tab) {
						display: none;
					}
				}
			}
		}
	}
}
</style>
