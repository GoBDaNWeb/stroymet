<script setup>
import AboutMainSwiper from './AboutMainSwiper.vue';

import aboutImg from '/images/about/swiper1/1.jpg';
</script>

<template>
	<div class="about-main container">
		<div class="about-item">
			<AboutMainSwiper :imgs="[aboutImg, aboutImg, aboutImg, aboutImg]" />
		</div>
		<div class="about-item">
			<h5>
				Завод кровельных материалов «Строймет» с 1995 года реализует продукцию в сфере строительных
				материалов и кровельных систем.
			</h5>
			<div class="about-item-content">
				<div class="image-wrapper">
					<img src="/images/about/about.png" alt="about" />
				</div>
				<p>
					На сегодняшний день компания «Строймет» - это активно развивающийся бизнес, готовый
					предложить партнёрам стабильные сроки поставки, необходимое качество продукции, хорошие
					цены и безусловное выполнение финансовых обязательств.
					<br />
					<br />Компания активно расширяет ассортимент и территориально развивается, совершенствуя
					стандарты обслуживания клиентов и взаимодействия с партнерами с целью долгосрочного,
					плодотворного и взаимовыгодного сотрудничества.
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about-main {
	margin-top: 103px;
	display: grid;
	align-items: flex-start;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;
	.about-item {
		h5 {
			color: var(--blue-color);
			font-weight: 400;
			font-size: 20px;
			line-height: 22px;
		}
		.about-item-content {
			margin-top: 50px;
			display: grid;
			gap: 30px;
			grid-template-columns: repeat(2, 1fr);
			align-items: flex-start;
			.image-wrapper {
				position: relative;
				padding-bottom: 100%;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
			p {
				color: var(--gray-color);
				font-weight: 400;
				font-size: 18px;
				line-height: 23px;
			}
		}
	}
}
</style>
