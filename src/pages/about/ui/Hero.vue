<script setup>
import { Breadcrumbs } from '@/shared/ui';

import { breadcrumbsList } from '../config';
</script>

<template>
	<div class="hero">
		<div class="container">
			<div class="breadcrumbs-wrapper">
				<Breadcrumbs :breadcrumbs="breadcrumbsList" />
			</div>
			<div class="hero-inner">
				<h1>Завод кровельных <br />и фасадных материалов <br />«Строймет»</h1>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	height: 100vh;
	position: relative;
	background-image: url('/images/about/hero.jpg');
	.breadcrumbs-wrapper {
		position: absolute;
		top: 100px;
		height: 10px;
		padding: 0;
		& > div {
			margin-top: 0;
			margin-bottom: 0;
			padding: 0;
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

		h1 {
			font-weight: 400;
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
