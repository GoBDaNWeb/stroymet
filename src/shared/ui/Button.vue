<script setup>
const props = defineProps(['title', 'variable', 'click', 'type', 'disabled']);
</script>

<template>
	<button :class="[variable]" @click="click" :disabled="disabled">
		<slot></slot>
	</button>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

button:disabled {
	pointer-events: none;
}
button {
	padding: 0;
}
button.outline {
	border: 1px solid var(--white-color);
	font-size: 16px;
	line-height: 14px;
	font-weight: 400;
	color: var(--white-color);
}
button.nav {
	width: 55px;
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--blue-color);
	transition: var(--trs-300);
	&:hover {
		background: var(--blue-hover-color);
	}
	@media (max-width: $tab) {
		width: 40px;
		height: 40px;
		svg {
			width: 50%;
			height: 50%;
		}
	}
}
button.primary {
	background: var(--blue-color);
	color: var(--white-color);
	font-weight: 400;
	font-size: 16px;
	line-height: 14px;
	height: 40px;
	width: 100%;
	text-transform: uppercase;
	transition: var(--trs-300);
	&:hover {
		background: var(--blue-hover-color);
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
	@media (max-width: $tab) {
		font-size: 14px;
		line-height: 12px;
	}
}
button.count {
	width: 40px;
	height: 40px;
	border: 1px solid var(--light-gray-color);
	display: flex;
	align-items: center;
	justify-content: center;
}
button.remove {
	width: 30px;
	height: 30px;
	border: 1px solid var(--light-gray-color);
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
