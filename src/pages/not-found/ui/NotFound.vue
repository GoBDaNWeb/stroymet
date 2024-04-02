<script setup>
import { useRouter } from 'vue-router';

import { Button } from '@/shared/ui';

const router = useRouter();
</script>

<template>
	<main class="not-found-page">
		<div class="container">
			<div class="not-found-inner">
				<div class="left">
					<h1>страница <br />не существует или была удалена</h1>
					<Button variable="primary" @click="router.push('/')">на главную</Button>
				</div>
				<div class="right">
					<div class="image-wrapper">
						<img src="/images/404.png" alt="404" />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.not-found-page {
	background: var(--gray-back-color);
	background-image: linear-gradient(180deg, rgba(109, 121, 141, 1) 0%, rgba(109, 121, 141, 0) 100%);
	padding-top: 120px;
	@media (max-width: $tab) {
		padding-top: 130px;
	}
	.not-found-inner {
		display: grid;
		grid-template-columns: 0.5fr 1fr;
		gap: 30px;
		align-items: center;
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			gap: 80px;
		}
		.left {
			@media (max-width: $tab) {
				order: 1;
				margin-bottom: 80px;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			h1 {
				color: var(--white-color);
				font-weight: 400;
				font-size: 40px;
				line-height: 40px;
				text-transform: uppercase;
				@media (max-width: $tab) {
					font-size: 30px;
					line-height: 30px;
				}
			}
			button {
				height: 62px;
				max-width: 313px;
				margin-top: 50px;
				@media (max-width: $tab) {
					height: 55px;
					margin-top: 30px;
				}
				@media (max-width: $tab-sm) {
					max-width: 100%;
				}
			}
		}
		.right {
			@media (max-width: $tab) {
				order: 0;
			}
			.image-wrapper {
				position: relative;
				padding-bottom: 75%;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
		}
	}
}
</style>
