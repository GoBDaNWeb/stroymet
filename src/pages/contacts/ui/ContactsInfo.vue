<script setup>
import { Map } from '@/entities/map';

import { DoubleArrowsIcon } from '@/shared/icons';
import { Button, Input, Textarea } from '@/shared/ui';
</script>

<template>
	<div class="contacts-info container">
		<h1>контакты</h1>
		<div class="contacts-info-content">
			<div class="contacts-item">
				<h4>офис в Москве</h4>
				<div class="contacts">
					<a href="tel:+7 499 394-50-41" class="tel">+7 499 394-50-41</a>
					<a href="mailto:info@msk-vostok.ru" class="mail">info@msk-vostok.ru</a>
				</div>
				<div class="info">
					<p>ПН-ПТ 10:00 - 19:00</p>
				</div>
				<div class="address">
					<p>Москва, Киевское шоссе, стр. 2В <br />Бизнес Парк «Румянцево»</p>
					<div class="map-wrapper">
						<Map id="map" :coords="[55.633770391314265, 37.44296229890094]" />
						<Button><DoubleArrowsIcon />развернуть</Button>
					</div>
				</div>
			</div>
			<div class="contacts-item">
				<h4>Склад</h4>
				<div class="contacts">
					<a href="tel:+7 499 394-50-41" class="tel">+7 499 394-50-41</a>
					<a href="mailto:info@msk-vostok.ru" class="mail">info@msk-vostok.ru</a>
				</div>
				<div class="info">
					<p>ПН-ПТ 10:00 - 19:00</p>
				</div>
				<div class="address">
					<p>Москва, ул. Красного Маяка, 26</p>
					<div class="map-wrapper">
						<Map id="map2" :coords="[55.60689789477403, 37.57718033068848]" />
						<Button><DoubleArrowsIcon />развернуть</Button>
					</div>
				</div>
			</div>
			<div class="contacts-item">
				<form>
					<h4>Отзывы <br />и предложения</h4>
					<div class="inputs">
						<Input placeholder="Ваше имя" />
						<Input placeholder="Телефон" />
						<Textarea placeholder="Сообщение" />
					</div>
					<p>
						Нажимая кнопку «Отправить» вы даёте своё согласие с
						<a href="#" target="_blank">правилами обработки персональных данных</a>
					</p>
					<Button variable="primary">отправить</Button>
				</form>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.contacts-info {
	.contacts-info-content {
		.contacts-item {
			.map-wrapper {
				button {
					svg {
						path {
							fill: var(--blue-color);
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

.contacts-info {
	h1 {
		color: var(--gray-color);
		font-weight: 400;
		font-size: 40px;
		line-height: 40px;
		text-transform: uppercase;
		@media (max-width: $tab) {
			font-size: 30px;
			line-height: 30px;
		}
	}
	.contacts-info-content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-top: 50px;
		gap: 30px;
		margin-bottom: 100px;
		@media (max-width: $tab) {
			margin-bottom: 80px;
			margin-top: 35px;
			grid-template-columns: 1fr;
			gap: 50px;
		}
		.contacts-item {
			display: flex;
			flex-direction: column;
			form {
				padding-left: 50px;
				@media (max-width: $tab) {
					padding-left: 0;
				}
				h4 {
					color: var(--blue-color);
				}

				.inputs {
					display: flex;
					flex-direction: column;
					gap: 20px;
					margin-top: 30px;
					input {
						border: 1px solid var(--light-gray-color);
						color: var(--gray-color);
						&::placeholder {
							color: var(--gray-back-color);
						}
					}
				}
				p {
					color: var(--gray-back-color);
					font-weight: 400;
					font-size: 12px;
					line-height: 15px;
					margin-top: 20px;
					@media (max-width: $tab) {
						font-size: 11px;
						line-height: 14px;
					}
					a {
						color: var(--blue-color);
					}
				}
				button {
					height: 62px;
					margin-top: 20px;
					@media (max-width: $tab) {
						height: 55px;
					}
				}
			}
			h4 {
				color: var(--gray-color);
				font-weight: 400;
				font-size: 30px;
				line-height: 33px;
				text-transform: uppercase;
				@media (max-width: $tab) {
					font-size: 24px;
					line-height: 26px;
				}
			}
			.contacts {
				margin-top: 30px;
				display: flex;
				flex-direction: column;
				gap: 5px;
				margin-bottom: 30px;

				.tel {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 18px;
					line-height: 23px;
					@media (max-width: $tab) {
						font-size: 16px;
						line-height: 20px;
					}
				}
				.mail {
					color: var(--blue-color);
					font-weight: 400;
					font-size: 18px;
					line-height: 23px;
					@media (max-width: $tab) {
						font-size: 16px;
						line-height: 20px;
					}
				}
			}
			.info {
				padding-top: 30px;
				padding-bottom: 30px;
				border-top: 1px solid var(--light-gray-color);
				border-bottom: 1px solid var(--light-gray-color);
				@media (max-width: $tab) {
					padding-top: 15px;
					padding-bottom: 15px;
				}
				p {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 18px;
					line-height: 23px;
					text-transform: uppercase;
					@media (max-width: $tab) {
						font-size: 16px;
						line-height: 20px;
					}
				}
			}
			.address {
				margin-top: 30px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 30px;
				flex: 1;
				@media (max-width: $tab) {
					margin-top: 15px;
				}
				p {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 18px;
					line-height: 23px;
				}
				.map-wrapper {
					position: relative;
					padding-bottom: 75%;
					max-height: 290px;
					min-height: 290px;
					flex: 1;

					@media (max-width: $tab) {
						max-height: auto;
						min-height: auto;
					}
					& > div {
						position: absolute;
						width: 100%;
						height: 100%;
					}
					button {
						position: absolute;
						top: 10px;
						right: 10px;
						background: var(--white-color);
						border: 1px solid var(--blue-color);
						font-weight: 400;
						text-transform: uppercase;
						font-size: 14px;
						line-height: 14px;
						display: flex;
						align-items: center;
						gap: 10px;
						height: 45px;
						width: 160px;
						justify-content: center;
						color: var(--blue-color);
						@media (max-width: $tab) {
							font-size: 12px;
							line-height: 12px;
							height: 36px;
							font-size: 12px;
							line-height: 12px;
						}
						svg {
							path {
								fill: var(--blue-color);
							}
						}
					}
				}
			}
		}
	}
}
</style>
