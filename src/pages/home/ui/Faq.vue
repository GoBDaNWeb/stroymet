<script setup>
import { reactive } from 'vue';
import { Collapse } from 'vue-collapsed';

const questions = reactive([
	{
		title: 'Сколько необходимо времени для изготовления заказа?',
		answer:
			'Здесь будет ответ на вопрос. Дальше текст для массы. Наличие собственного производства, отвечающего высоким требованиям заказчиков и современным стандартам, а соответственно, и более выгодные цены при сотрудничестве напрямую с производителем.',
		isExpanded: false
	},
	{
		title: 'Возможна ли доставка по России?',
		answer:
			'Здесь будет ответ на вопрос. Дальше текст для массы. Наличие собственного производства, отвечающего высоким требованиям заказчиков и современным стандартам, а соответственно, и более выгодные цены при сотрудничестве напрямую с производителем.',
		isExpanded: false
	},
	{
		title: 'Как добраться к Вашему офису и производству?',
		answer:
			'Здесь будет ответ на вопрос. Дальше текст для массы. Наличие собственного производства, отвечающего высоким требованиям заказчиков и современным стандартам, а соответственно, и более выгодные цены при сотрудничестве напрямую с производителем.',
		isExpanded: false
	},
	{
		title: 'Какой-то еще вопрос, важный для пользователя?',
		answer:
			'Здесь будет ответ на вопрос. Дальше текст для массы. Наличие собственного производства, отвечающего высоким требованиям заказчиков и современным стандартам, а соответственно, и более выгодные цены при сотрудничестве напрямую с производителем.',
		isExpanded: false
	},
	{
		title: 'Возможно еще один вопрос?',
		answer:
			'Здесь будет ответ на вопрос. Дальше текст для массы. Наличие собственного производства, отвечающего высоким требованиям заказчиков и современным стандартам, а соответственно, и более выгодные цены при сотрудничестве напрямую с производителем.',
		isExpanded: false
	}
]);
function handleAccordion(selectedIndex) {
	questions.forEach((_, index) => {
		questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false;
	});
}
</script>

<template>
	<div class="faq container">
		<div class="left">
			<h3>Вопросы и ответы</h3>
			<div class="accordion">
				<div
					class="accordion-item"
					:class="{ active: question.isExpanded }"
					v-for="(question, index) in questions"
					:key="question.title"
				>
					<button @click="() => handleAccordion(index)">
						<span> </span>
						<p>
							{{ question.title }}
						</p>
					</button>
					<Collapse :when="questions[index].isExpanded" class="collapse">
						<p>
							{{ question.answer }}
						</p>
					</Collapse>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="image-wrapper">
				<img src="/images/home/faq.png" alt="faq" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.faq {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 144px;
	margin-top: 130px;
	margin-bottom: 130px;
	@media (max-width: $tab) {
		margin-top: 80px;
		margin-bottom: 80px;
		grid-template-columns: repeat(1, 1fr);
	}
	.left {
		h3 {
			color: var(--gray-color);
			font-weight: 400;
			font-size: 50px;
			line-height: 50px;
			text-transform: uppercase;
			@media (max-width: $tab) {
				font-size: 30px;
				line-height: 30px;
			}
		}
		.accordion {
			margin-top: 51px;
			display: flex;
			flex-direction: column;
			@media (max-width: $tab) {
				margin-top: 35px;
			}
			.accordion-item.active {
				button {
					@media (max-width: $tab) {
						padding: 20px 20px 10px;
					}
					span {
						transform: rotate(45deg);
					}
					p {
						color: var(--blue-color);
					}
				}
				.collapse {
					p {
						padding-bottom: 20px;
					}
				}
			}
			.accordion-item {
				border-top: 1px solid var(--light-gray-color);
				&:last-child {
					border-bottom: 1px solid var(--light-gray-color);
				}
				button {
					display: flex;
					align-items: flex-start;
					gap: 10px;
					padding: 25px 0;
					@media (max-width: $tab) {
						padding: 20px;
					}
					p {
						color: var(--gray-color);
						font-weight: 400;
						font-size: 26px;
						line-height: 26px;
						text-align: left;
						transition: var(--trs-300);
						@media (max-width: $tab) {
							font-size: 20px;
							line-height: 22px;
						}
					}
					span {
						position: relative;
						min-width: 20px;
						min-height: 20px;
						max-width: 20px;
						max-height: 20px;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-top: 5px;
						transition: var(--trs-300);
						&:after {
							content: '';
							position: absolute;
							width: 100%;
							height: 1px;
							background: var(--blue-color);
						}
						&:before {
							content: '';
							position: absolute;
							width: 1px;
							height: 100%;
							background: var(--blue-color);
						}
					}
				}
				.collapse {
					p {
						color: var(--gray-color);
						font-weight: 400;
						font-size: 18px;
						line-height: 23px;
						@media (max-width: $tab) {
							font-size: 16px;
							line-height: 20px;
							padding-left: 52px;
						}
					}
				}
			}
		}
	}
	.right {
		@media (max-width: $tab) {
			display: none;
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: absolute;
			}
		}
	}
}
</style>
