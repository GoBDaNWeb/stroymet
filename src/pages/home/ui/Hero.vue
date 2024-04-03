<script setup>
import {watch} from 'vue'
import { Pin } from '@/entities/pin';
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

</script>

<template>
	<div class="hero">
		<!-- <img src="/images/home/hero.jpg" alt="" /> -->
		<div class="pins container">
			<Pin direction="left" title="Забор " />
			<Pin direction="left" title="Водосточная система" />
			<Pin :direction="width <=767 ? 'left' :'right'" title="⁠Доборные элементы" />
			<Pin :direction="width <=767 ? 'right' :'left'" title="⁠Снегозадержатели " />
			<Pin direction="right" title="Кровля " />
		</div>
		<div class="container">
			<div class="hero-inner">
				<h1>кровельные <br />и фасадные материалы <br />от производителя</h1>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	height: 100vh;
	position: relative;
	background-image: url('/images/home/hero.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	@media (max-width: 1200px) {
		background-image: url('/images/home/hero2.jpg');
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.pins {
		z-index: 4;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		& > div:nth-child(1) {
			position: absolute;
			top: 59%;
			left: 2%;
			z-index: 3;
			@media(max-width: $tab-sm) {
				display: none;
			}
			
		}
		& > div:nth-child(2) {
			position: absolute;
			top: 38%;
			left: 33%;
			z-index: 1;
			@media (max-width: 1200px) {
				left: 42%;
			}
			@media(max-width: $tab-sm) {
				left: 6%;
				top: 56%;

			}
		}
		& > div:nth-child(3) {
			position: absolute;
			top: 32%;
			left: 60%;
			z-index: 2;
			@media (max-width: 1200px) {
				left: 70%;
				top: 32%;
			}
			@media(max-width: $tab-sm) {
				left: 14%;
				top: 30%;
				z-index: 3;
			}
		}
		& > div:nth-child(4) {
			position: absolute;
			top: 39%;
			left: 19%;
			z-index: 2;
			@media (max-width: 1200px) {
				left: 23%;
				top: 41%;
			}
			@media (max-width: $tab) {
				left: 15%;
				top: 41%;
			}
			@media(max-width: $tab-sm) {
				left: 70%;
				top: 38%;
				z-index: 5;
			}
		}
		& > div:nth-child(5) {
			position: absolute;
			top: 30%;
			left: 42%;
			z-index: 2;
			@media (max-width: 1200px) {
				left: 52%;
			}
			@media(max-width: $tab-sm) {
				left: 79%;
				top: 29%;
				z-index: 6;
			}
		}
	}
	.container {
		height: 100%;
	}
	.hero-inner {
		position: relative;
		height: 100%;
		width: 100%;
		z-index: 2;
		pointer-events: none;
		h1 {
			font-weight: 500;
			font-size: 50px;
			line-height: 50px;
			z-index: 2;
			text-transform: uppercase;
			color: var(--white-color);
			position: absolute;
			bottom: 50px;
			left: 0;
			text-shadow: 3px 3px 4px #000;
			letter-spacing: -1px;
			@media (max-width: $tab) {
				font-size: 30px;
				line-height: 30px;
				bottom: 30px;
			}
		}
	}
}
</style>
