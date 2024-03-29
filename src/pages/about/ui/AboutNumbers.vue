<template>
	<div class="about-numbers container">
		<div class="about-numbers-item">
			<h4>о компании в цифрах</h4>
			<div class="about-numbers-item-content">
				<div class="number">
					<h3>10 000+</h3>
					<p>объектов разного уровня</p>
				</div>
				<div class="number">
					<h3>3 200+</h3>
					<p>постоянных клиентов</p>
				</div>
				<div class="number">
					<h3>25</h3>
					<p>лет на рынке</p>
				</div>
				<div class="number">
					<h3>2 500+</h3>
					<p>товарных позиций</p>
				</div>
			</div>
		</div>
		<div class="about-numbers-item">
			<div class="image-wrapper">
				<img src="/images/about/about2.jpg" alt="about" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about-numbers {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	margin-top: 144px;
	.about-numbers-item {
		h4 {
			color: var(--gray-color);
			font-weight: 400;
			font-size: 30px;
			line-height: 33px;
			text-transform: uppercase;
		}
		.about-numbers-item-content {
			margin-top: 60px;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 30px;
			align-items: flex-start;
			.number {
				padding-top: 50px;
				padding-bottom: 50px;
				border-top: 1px solid var(--light-gray-color);
				display: flex;
				flex-direction: column;
				gap: 20px;
				&:nth-child(3) {
					border-bottom: 1px solid var(--light-gray-color);
				}
				&:nth-child(4) {
					border-bottom: 1px solid var(--light-gray-color);
				}
				h3 {
					color: var(--blue-color);
					font-weight: 400;
					font-size: 70px;
					line-height: 66px;
				}
				p {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 20px;
					line-height: 22px;
				}
			}
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 80%;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
