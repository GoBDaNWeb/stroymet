<script setup>
import { useModalStore } from '@/entities/modal-store';

import { RemoveIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const modal = useModalStore();
</script>

<template>
	<div
		@click.stop="modal.handleOpenSuccessModal"
		class="success-modal"
		:class="modal.successActive ? 'active' : ''"
	>
		<div @click.stop class="success-modal-content">
			<Button variable="remove" @click.stop="modal.handleOpenSuccessModal"><RemoveIcon /></Button>

			<h3>ваша заявка успешно отправлена</h3>
			<p>Наш специалист свяжется с вами в ближайшее время для уточнения деталей вашего заказа.</p>
		</div>
	</div>
</template>

<style lang="scss">
.success-modal {
	.success-modal-content {
		button {
			svg {
				path {
					transition: var(--trs-300);
				}
			}
			&:hover {
				border-color: var(--blue-hover-color);
				svg {
					path {
						stroke: var(--blue-hover-color);
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.success-modal.active {
	opacity: 1;
	pointer-events: all;
	.burger {
		opacity: 1;
	}
	.success-modal-content {
		pointer-events: all;
		opacity: 1;
		transform: translateX(0);
	}
}
.success-modal {
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
	.success-modal-content {
		background: var(--white-color);
		height: 100%;
		right: 0;
		width: 45vw;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: var(--trs-300);
		padding: 0 50px;
		transform: translateX(100%);
		opacity: 0;
		pointer-events: none;
		@media (max-width: $tab) {
			width: 60vw;
		}
		@media (max-width: $pre-mob) {
			width: 100vw;
			bottom: 0;
			left: 0;
			height: 200px;
			align-items: flex-start;
			padding: 30px 20px;
		}
		button {
			position: absolute;
			top: 50px;
			right: 50px;
			transition: var(--trs-300);
			@media (max-width: $pre-mob) {
				top: 20px;
				right: 20px;
			}
			svg {
				path {
					transition: var(--trs-300);
				}
			}
		}
		h3 {
			color: var(--blue-color);
			font-weight: 400;
			font-size: 30px;
			line-height: 33px;
			text-transform: uppercase;
			max-width: 426px;
			margin-bottom: 20px;
			@media (max-width: $tab) {
				font-size: 24px;
				line-height: 26px;
				max-width: 263px;
				margin-bottom: 15px;
			}
		}
		p {
			color: var(--gray-color);
			font-weight: 400;
			font-size: 18px;
			line-height: 23px;
			max-width: 426px;
			@media (max-width: $tab) {
				font-size: 16px;
				line-height: 20px;
				max-width: 263px;
			}
		}
	}
}
</style>
