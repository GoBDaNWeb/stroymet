<script setup>
import { DoubleArrowsIcon, LogoIcon, ParadigmaIcon } from '@/shared/icons';
import { Button, Input } from '@/shared/ui';
</script>

<template>
	<footer class="footer">
		<div class="form-wrapper">
			<form class="form container">
				<h4>задать вопрос</h4>
				<Input placeholder="Ваше имя" />
				<Input placeholder="Телефон" />
				<Button variable="outline">отправить</Button>
			</form>
		</div>
		<div class="info-wrapper">
			<div class="info container">
				<div class="image-wrapper">
					<img src="/images/footer-material.png" alt="material" />
				</div>
				<div class="info-item">
					<h5>офис в Москве</h5>
					<h6>Отдел продаж</h6>
					<ul>
						<li>
							<a href="tel:+7 499 394-50-41">+7 499 394-50-41</a>
						</li>
						<li>
							<a href="mailto:info@msk-vostok.ru">info@msk-vostok.ru</a>
						</li>
						<li>
							<p>
								Москва, Киевское шоссе, стр. 2В<br />
								Бизнес Парк «Румянцево»
							</p>
						</li>
					</ul>
					<Button variable="outline"><DoubleArrowsIcon />посмотреть на карте</Button>
				</div>
				<div class="info-item">
					<h5>Склад</h5>
					<ul>
						<li>
							<a href="tel:+7 499 394-50-41">+7 499 394-50-41</a>
						</li>
						<li>
							<a href="mailto:info@msk-vostok.ru">info@msk-vostok.ru</a>
						</li>
						<li>
							<p>Москва, ул. Красного Маяка, 26</p>
						</li>
					</ul>
					<Button variable="outline"> <DoubleArrowsIcon />посмотреть на карте </Button>
				</div>
				<div class="info-item">
					<h5>реквизиты</h5>
					<ul>
						<li><p>ИНН: 3664069397</p></li>
						<li><p>ОГРН: 1053600591197</p></li>
						<li><p>ОКПО: 79271669</p></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="bottom container">
			<div class="logo">
				<LogoIcon />
			</div>
			<div class="policy">
				<p>©2024, ООО «СтройМет» Все права защищены.</p>
				<a href="#">Политика конфиденциальности</a>
			</div>
			<div class="paradigma">
				<a href="https://paradigma-digital.ru/" target="_blank">
					<ParadigmaIcon /> Разработка сайта – Paradigma
				</a>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
.footer {
	.bottom {
		.logo {
			svg {
				path {
					fill: var(--white-color);
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.footer {
	background: var(--blue-color);
	padding-top: 80px;
	.form-wrapper {
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 80px;
		@media (max-width: $tab) {
			padding-bottom: 40px;
		}
		.form {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 30px;
			align-items: center;
			@media (max-width: $tab) {
				gap: 20px;
				grid-template-columns: repeat(1, 1fr);
			}
			h4 {
				color: var(--white-color);
				font-weight: 400;
				font-size: 50px;
				line-height: 50px;
				text-transform: uppercase;
				@media (max-width: $tab) {
					font-size: 30px;
					line-height: 30px;
				}
			}
			button {
				height: 62px;
			}
		}
	}
	.info-wrapper {
		padding-top: 46px;
		padding-bottom: 45px;
		border-bottom: 1px solid var(--border-color);

		.info {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 30px;
			align-items: center;
			@media (max-width: $tab) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media (max-width: $tab-sm) {
				grid-template-columns: repeat(1, 1fr);
				gap: 40px;
			}
			.image-wrapper {
				position: relative;
				padding-bottom: 100%;
				@media (max-width: $tab) {
					display: none;
				}
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
			.info-item {
				display: flex;
				flex-direction: column;
				gap: 25px;
				justify-content: flex-start;
				height: 100%;
				max-height: 280px;
				@media (max-width: $desktop-sm) {
					max-height: 380px;
				}
				@media (max-width: $tab-sm) {
					gap: 20px;
				}
				&:last-child {
					ul {
						justify-content: flex-start;
						margin-top: 89px;
						@media (max-width: $tab-sm) {
							margin-top: 0;
						}
					}
				}
				h5 {
					color: var(--white-color);
					font-weight: 400;
					font-size: 28px;
					line-height: 29px;
					text-transform: uppercase;
					@media (max-width: $tab) {
						font-size: 20px;
						line-height: 21px;
					}
					@media (max-width: $tab-sm) {
						margin-bottom: 5px;
					}
				}
				h6 {
					color: var(--white-color);
					font-weight: 400;
					font-size: 20px;
					line-height: 20px;
					text-transform: uppercase;
					@media (max-width: $tab) {
						font-size: 14px;
						line-height: 14px;
					}
				}
				ul {
					display: flex;
					flex-direction: column;
					gap: 5px;
					flex: 1;
					justify-content: flex-end;

					li {
						p,
						a {
							font-size: 16px;
							line-height: 19px;
							font-weight: 400;
							color: var(--white-color);
							@media (max-width: $tab) {
								font-size: 14px;
								line-height: 18px;
							}
						}
					}
				}
				button {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 45px;
					border-color: var(--border-color);
					font-weight: 400;
					line-height: 14px;
					font-size: 14px;
					text-transform: uppercase;
					gap: 10px;
					@media (max-width: $tab) {
						height: 45px;
						font-size: 12px;
						line-height: 12px;
					}
				}
			}
		}
	}
	.bottom {
		display: flex;
		@media (max-width: $tab-sm) {
			flex-direction: column;
			padding-bottom: 20px;
		}
		.logo {
			border-right: 1px solid var(--border-color);
			padding-top: 25px;
			padding-bottom: 25px;
			padding-right: 40px;
			@media (max-width: $tab) {
				display: none;
			}
		}
		.policy {
			flex: 1;
			display: flex;
			align-items: center;
			gap: 36px;
			justify-content: space-between;
			padding-left: 50px;
			padding-right: 50px;
			border-right: 1px solid var(--border-color);
			padding-top: 25px;
			padding-bottom: 25px;
			@media (max-width: $tab) {
				padding-left: 0;
			}
			@media (max-width: $tab-sm) {
				border-right: none;
				flex-direction: column;
				align-items: flex-start;
				gap: 10px;
				padding: 0;
				padding-top: 20px;
				padding-bottom: 10px;
			}
			a,
			p {
				color: var(--white-color);
				font-size: 14px;
				line-height: 19px;
				font-weight: 400;
				@media (max-width: $tab) {
					font-size: 11px;
					line-height: 14px;
				}
			}
		}
		.paradigma {
			padding-left: 50px;
			display: flex;
			align-items: center;
			@media (max-width: $tab-sm) {
				padding: 0;
			}
			a {
				display: flex;
				align-items: center;
				gap: 13px;
				font-weight: 400;
				font-size: 14px;
				line-height: 19px;
				color: var(--white-color);

				@media (max-width: $tab) {
					font-size: 11px;
					line-height: 14px;
					svg {
						width: 15px;
						height: 15px;
					}
				}
			}
		}
	}
}
</style>
