<script setup>
import { ref } from 'vue';

const props = defineProps(['options']);
const selected = ref(null);
const isActive = ref(null);

const selectedValue = ref(props.options[0].label);

const handleOpenSelect = () => {
	isActive.value = !isActive.value;
};
const handleCloseSelect = () => {
	isActive.value = false;
};

const handleSelectValue = index => {
	selectedValue.value = props.options[index].label;
	isActive.value = false;
};
</script>

<template>
	<div class="selector" @mouseleave="handleCloseSelect" :class="isActive ? 'active' : ''">
		<button @click="handleOpenSelect" class="selector-btn">
			<p>{{ selectedValue }}</p>
			<span
				><svg
					width="17"
					height="10"
					viewBox="0 0 17 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1 1.25L8.5 8.75L16 1.25" stroke="#144BA1" />
				</svg>
			</span>
		</button>
		<div class="selector-content">
			<div class="selector-list">
				<label @click="handleSelectValue(index)" v-for="(option, index) in options" :key="index">
					<input type="radio" value="{{option.value}}" :name="name" />
					<span>{{ option.label }}</span>
				</label>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.selector.active {
	button {
		span {
			transform: rotate(180deg);
		}
	}
	.selector-content {
		opacity: 1;
		pointer-events: all;
		transform: translateY(0);
	}
}
.selector {
	min-width: 250px;
	height: 100%;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0);
	width: 100%;
	border-radius: var(--rounded-sm);
	transition: all var(--trs-500);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	height: 61px;
	line-height: 150%;
	box-sizing: border-box;
	background: var(--gray-bg-color);
	position: relative;
	z-index: 100;

	.selector-btn {
		padding: 0;
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 3;
		margin-top: 0;
		gap: 20px;
		color: var(--gray-color);
		border: 1px solid var(--light-gray-color);
		padding: 15px 20px;
		background: var(--white-color);
		p {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			color: var(--gray-color);
			font-family: 'Vremena Grotesk', sans-serif;
		}
		span {
			transition: var(--trs-300);
		}
	}

	.selector-content {
		z-index: 2;
		position: absolute;
		background: #fff;
		box-shadow: var(--shadow);
		min-width: 100%;
		opacity: 0;
		transform: translateY(-20%);
		pointer-events: none;
		transition: var(--trs-300);
		padding: 25px;
		.selector-list {
			display: flex;
			flex-direction: column;
			gap: 15px;
			label {
				display: flex;
				align-items: center;
				gap: 10px;
				cursor: pointer;
				transition: var(--trs-300);
				&:hover {
					span {
						color: var(--blue-color);
					}
				}
				input {
					display: none;
				}
				span {
					color: #626262;
					font-size: 16px;
					font-weight: 400;
					line-height: 22px;
					transition: var(--trs-300);
				}
			}
		}
	}
}
</style>
