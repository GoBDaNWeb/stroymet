<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useMenuStore } from '@/entities/menu-store';

import { links } from '@/shared/config';
import { CartIcon, LogoIcon, WhatsappIcon } from '@/shared/icons';

const router = useRoute();
const menu = useMenuStore();

watch(router, () => {
	menu.isActive ? menu.handleOpenMenu() : null;
});

watch(
	() => menu.isActive,
	() => {
		if (menu.isActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);
</script>

<template>
	<div @click.stop="menu.handleOpenMenu" class="mobile-menu" :class="menu.isActive ? 'active' : ''">
		<button @click.stop="menu.handleOpenMenu" class="burger"></button>
		<div @click.stop class="mobile-menu-content">
			<div class="top">
				<RouterLink to="/" class="logo"><LogoIcon /></RouterLink>
				<RouterLink to="/cart" class="cart-btn">
					<CartIcon />
				</RouterLink>
			</div>
			<nav class="center">
				<RouterLink :to="link.url" v-for="(link, index) in links" :key="index">
					{{ link.title }}
				</RouterLink>
			</nav>
			<div class="bottom">
				<a href="tel:8 800 123-45-67">8 800 123-45-67</a>
				<a href="#" target="_blank"
					><WhatsappIcon />
					<p>написать <br />в whatsapp</p></a
				>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.mobile-menu {
	.mobile-menu-content {
		.top {
			.logo {
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

.mobile-menu.active {
	opacity: 1;
	pointer-events: all;
	.burger {
		opacity: 1;
	}
	.mobile-menu-content {
		pointer-events: all;
		opacity: 1;
		transform: translateX(0);
	}
}
.mobile-menu {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(148, 159, 177, 0.3);
	backdrop-filter: blur(5px);
	z-index: 110;
	display: flex;
	align-items: flex-start;
	opacity: 0;
	pointer-events: none;
	transition: var(--trs-300);
	.burger {
		width: 50px;
		height: 50px;
		min-width: 50px;
		min-height: 50px;
		background: var(--gray-back-color);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		transition: var(--trs-300);
		opacity: 0;
		&:after {
			content: '';
			position: absolute;
			width: 20px;
			height: 1px;
			background: var(--white-color);
			top: 25px;
			transform: rotate(45deg);
		}
		&:before {
			content: '';
			position: absolute;
			width: 20px;
			height: 1px;
			background: var(--white-color);
			bottom: 25px;
			transform: rotate(-45deg);
		}
	}
	.mobile-menu-content {
		background: var(--white-color);
		height: 100%;
		right: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		transition: var(--trs-300);
		transform: translateX(100%);
		opacity: 0;
		pointer-events: none;
		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 50px;
			border-bottom: 1px solid var(--light-gray-color);
			.logo {
				margin-left: 30px;
				width: 175px;
				height: 35px;
				svg {
					width: 100%;
					height: 100%;
				}
			}
			.cart-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50px;
				height: 50px;
				background: var(--blue-color);
			}
		}
		.center {
			display: flex;
			flex-direction: column;
			gap: 30px;
			padding-left: 30px;
			padding-right: 30px;
			flex: 1;
			justify-content: center;
			a {
				color: var(--gray-color);
				font-weight: 400;
				font-size: 18px;
				line-height: 16px;
			}
		}
		.bottom {
			padding: 34px 30px;
			display: flex;
			align-items: center;
			gap: 33px;
			border-top: 1px solid var(--light-gray-color);
			a {
				color: var(--gray-color);
				line-height: 14px;
				font-size: 16px;
				font-weight: 400;
				display: flex;
				align-items: center;
				gap: 10px;
				p {
					color: var(--green-color);
					font-size: 11px;
					line-height: 10px;
					font-weight: 400;
				}
			}
		}
	}
}
</style>
