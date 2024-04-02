<template>
	<div class="delivery-info container">
		<h1>доставка и оплата</h1>
		<div class="delivery-info-content">
			<div class="delivery-item">
				<h4>Доставка</h4>
				<h5>Привезём товар <br />по указанному адресу <br />в течение 1-3 дней</h5>
				<ul>
					<li>
						Благодаря продуманной логистике <br />мы доставляем материалы точно в согласованное
						время
					</li>
					<li>Конкретные сроки доставки уточняйте <br />у менеджера</li>
					<li>
						Область доставки: Москва, Московская область и близлежащие города в радиусе 300 км от
						Москвы – и ставим на первое место "Привезём товар по указанному адресу в течение 1-3
						дней
					</li>
				</ul>
				<h5>Самовывоз</h5>
				<p>Есть возможность забрать материалы со склада с помощью самовывоза</p>
				<span>г. Москва, ул. Красного Маяка, д. 26</span>
			</div>
			<div class="delivery-item">
				<div class="map-wrapper">
					<iframe
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d9dd0859d7efd85fbf6c08110a9d63de0cd7ddc77d4610e0c5810ef3aa9ca5b&source=constructor"
						width="882"
						height="600"
						frameborder="0"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.delivery-info {
	h1 {
		color: var(--gray-color);
		font-size: 40px;
		line-height: 40px;
		font-weight: 500;
		text-transform: uppercase;
		@media (max-width: $tab) {
			font-size: 30px;
			line-height: 30px;
		}
	}
	.delivery-info-content {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 87px;
		margin-top: 50px;
		@media (max-width: $desktop-sm) {
			grid-template-columns: 0.55fr 1fr;
		}
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			gap: 50px;
			margin-top: 34px;
		}
		.delivery-item {
			h4 {
				color: var(--gray-color);
				font-size: 30px;
				line-height: 33px;
				font-weight: 400;
				text-transform: uppercase;
				@media (max-width: $tab) {
					font-size: 24px;
					line-height: 26px;
				}
			}
			h5 {
				color: var(--blue-color);
				font-weight: 400;
				font-size: 24px;
				line-height: 26px;
				margin-top: 30px;
				text-transform: uppercase;
				@media (max-width: $tab) {
					font-size: 20px;
					line-height: 22px;
					margin-top: 35px;
				}
			}
			ul {
				display: flex;
				flex-direction: column;
				gap: 20px;
				margin-top: 20px;
				margin-bottom: 50px;
				@media (max-width: $tab) {
					gap: 15px;
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
			p {
				position: relative;
				color: var(--gray-color);
				font-weight: 400;
				font-size: 18px;
				line-height: 23px;
				margin-top: 20px;
				@media (max-width: $tab) {
					font-size: 16px;
					line-height: 20px;
				}
			}
			span {
				position: relative;
				color: var(--gray-color);
				font-weight: 500;
				font-size: 18px;
				line-height: 23px;
				display: block;
				margin-top: 20px;
				@media (max-width: $tab) {
					font-size: 16px;
					line-height: 20px;
					margin-top: 10px;
				}
			}
			.map-wrapper {
				position: relative;
				padding-bottom: 70%;
				iframe {
					width: 100%;
					height: 100%;
					position: absolute;
				}
			}
		}
	}
}
</style>
