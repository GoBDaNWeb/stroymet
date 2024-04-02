<template>
	<div class="delivery-contacts">
		<div class="container">
			<div class="delivery-contacts-inner">
				<h4>Оплата</h4>
				<div class="delivery-contacts-list">
					<div class="delivery-item">
						<h5>Предусмотрено несколько вариантов оплаты</h5>
						<ul class="payments">
							<li>наличными в офисе или при получении заказа</li>
							<li>банковской картой в офисе или при получении заказа через СБП</li>
							<li>по реквизитам</li>
						</ul>
					</div>
					<div class="delivery-item">
						<h5>Оплата через СБП</h5>
						<p>
							Для оплаты перейдите по <a href="#" target="_blank">ссылке</a> либо отсканируйте QR
						</p>
						<div class="image-wrapper">
							<img src="/images/delivery/qr.jpg" alt="qr" />
						</div>
					</div>
					<div class="delivery-item">
						<h5>Реквизиты для оплаты</h5>
						<ul class="requisites">
							<li>
								<span>Расчетный счет</span>
								<p>40702810123450101230 в Московский банк ПАО Сбербанк</p>
							</li>
							<li>
								<span>Кор. счет</span>
								<p>30101234500000000225</p>
							</li>
							<li>
								<span>БИК</span>
								<p>30101234500000000225</p>
							</li>
							<li>
								<span>ИНН</span>
								<p>7712345678</p>
							</li>
							<li>
								<span>Адрес</span>
								<p>Москва, Киевское шоссе, стр. 2В Бизнес Парк «Румянцево»</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.delivery-contacts {
	margin-top: 100px;
	padding-top: 100px;
	margin-bottom: 100px;
	border-top: 1px solid var(--light-gray-color);
	@media (max-width: $tab) {
		margin-top: 80px;
		margin-bottom: 80px;
		padding-top: 80px;
	}
	.delivery-contacts-inner {
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
		.delivery-contacts-list {
			margin-top: 50px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 70px;
			@media (max-width: $tab) {
				grid-template-columns: 1fr;
				gap: 50px;
				margin-top: 35px;
			}
			.delivery-item {
				h5 {
					color: var(--blue-color);
					font-weight: 400;
					font-size: 24px;
					text-transform: uppercase;
					line-height: 26px;
					@media (max-width: $tab) {
						font-size: 20px;
						line-height: 22px;
					}
				}
				p {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 18px;
					line-height: 23px;
					margin-top: 30px;
					@media (max-width: $tab) {
						font-size: 16px;
						line-height: 20px;
						margin-top: 20px;
					}
					a {
						color: var(--blue-color);
					}
				}
				.image-wrapper {
					position: relative;
					width: 197px;
					height: 197px;
					margin-top: 30px;
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
				.payments {
					display: flex;
					flex-direction: column;
					gap: 20px;
					margin-top: 30px;
					@media (max-width: $tab) {
						margin-top: 20px;
						gap: 10px;
					}
					li {
						padding-left: 22px;
						position: relative;
						color: var(--gray-color);
						font-weight: 400;
						font-size: 18px;
						line-height: 23px;
						@media (max-width: $tab) {
							font-size: 16px;
							line-height: 20px;
						}
						&:before {
							content: '';
							width: 5px;
							height: 5px;
							background: var(--blue-color);
							left: 0;
							top: 10px;
							position: absolute;
						}
					}
				}
				.requisites {
					display: flex;
					flex-direction: column;
					gap: 20px;
					margin-top: 30px;
					li {
						display: grid;
						grid-template-columns: 0.6fr 1fr;
						gap: 10px;
						@media (max-width: $tab) {
							grid-template-columns: 0.4fr 1fr;
						}
						span {
							color: var(--gray-back-color);
							font-weight: 400;
							font-size: 18px;
							line-height: 23px;
							@media (max-width: $tab) {
								font-size: 16px;
								line-height: 20px;
							}
						}
						p {
							color: var(--gray-color);
							font-weight: 400;
							font-size: 18px;
							line-height: 23px;
							margin-top: 0;
							@media (max-width: $tab) {
								font-size: 16px;
								line-height: 20px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
