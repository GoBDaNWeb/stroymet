<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { CartIcon, LogoIcon, WhatsappIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

import { links } from '../config';

const route = useRoute();
console.log(route);
const active = ref(false);
const conditionHeader = route.path !== '/';
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
		<div class="container">
			<div class="header-inner">
				<RouterLink to="/" class="logo">
					<LogoIcon />
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
	}
	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		.logo {
			padding: 12px 50px 12px 0;
			border-right: 1px solid var(--border-color);
		}
		.navigation {
			display: flex;
			align-items: center;
			gap: 50px;
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
			a {
				display: flex;
				align-items: center;
				gap: 10px;
				color: var(--white-color);
				transition: var(--trs-300);
				p {
					color: var(--green-color);
					font-weight: 400;
					font-size: 11px;
					line-height: 10px;
					text-transform: uppercase;
				}
			}
		}
	}
}
</style>
