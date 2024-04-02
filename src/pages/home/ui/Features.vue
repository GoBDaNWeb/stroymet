<script setup>
import { DeliveryIcon, GostIcon, ProductionIcon, WastesIcon } from '@/shared/icons';
</script>

<template>
	<div class="features container">
		<div class="feture-item">
			<div class="icon">
				<GostIcon />
			</div>
			<div class="text">
				<h4>Работаем по ГОСТ</h4>
				<p>
					Используем только сертифицированное сырье ведущих металлургических комбинатов ММК,
					Северсталь, НЛМК
				</p>
			</div>
		</div>
		<div class="feture-item">
			<div class="icon">
				<ProductionIcon />
			</div>
			<div class="text">
				<h4>Наличие собственного производства</h4>
				<p>Мы являемся производителем, <br />что делает наши цены конкурентоспособными на рынке</p>
			</div>
		</div>
		<div class="feture-item">
			<div class="icon">
				<DeliveryIcon />
			</div>
			<div class="text">
				<h4>Своевременная доставка от 1 до 3 дней</h4>
				<p>Благодаря продуманной логистике мы доставляем материалы точно в согласованное время</p>
			</div>
		</div>
		<div class="feture-item">
			<div class="icon">
				<WastesIcon />
			</div>
			<div class="text">
				<h4>Минимальное количество отходов</h4>
				<p>Наши специалисты просчитывают комплектацию вашего заказа с минимальными обрезками</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.features {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 50px;
	margin-top: 61px;
	margin-bottom: 130px;
	@media (max-width: $desktop-sm) {
		grid-template-columns: repeat(3, 1fr);
		gap: 25px;
	}
	@media (max-width: $tab) {
		grid-template-columns: repeat(2, 1fr);
		margin-top: 40px;
		margin-bottom: 80px;
	}
	@media (max-width: $tab-sm) {
		grid-template-columns: repeat(1, 1fr);
	}
	.feture-item {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 290px;
		@media (max-width: $tab) {
			flex-direction: row;
		}
		@media (max-width: $tab-sm) {
			max-width: 100%;
		}
		.icon {
			width: 84px;
			height: 84px;
			min-width: 84px;
			min-height: 84px;
			max-width: 84px;
			max-height: 84px;
			@media (max-width: $tab) {
				height: 65px;
				width: 65px;
				min-height: 65px;
				min-width: 65px;
				max-height: 65px;
				max-width: 65px;
			}
			svg {
				width: 100%;
				height: 100%;
			}
		}
		.text {
			display: flex;
			flex-direction: column;
			gap: 15px;
			h4 {
				color: var(--blue-color);
				text-transform: uppercase;
				font-weight: 400;
				font-size: 20px;
				line-height: 22px;
				@media (max-width: $tab) {
					font-size: 16px;
					line-height: 19px;
				}
			}
			p {
				font-size: 16px;
				line-height: 20px;
				font-weight: 350;
				color: var(--gray-color);
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 18px;
				}
			}
		}
	}
}
</style>
