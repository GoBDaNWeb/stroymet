<script setup>
defineProps(['placeholder']);
</script>

<template>
	<textarea class="textarea" :placeholder="placeholder"></textarea>
</template>

<style lang="scss" scoped>
.textarea {
	resize: none;
	height: 150px;
	border: 1px solid var(--light-gray-color);
	width: 100%;
	padding: 25px 30px;
	outline: none;
	font-size: 16px;
	line-height: 20px;
	font-family: 'Vremena Grotesk', sans-serif;
	color: var(--gray-color);
	&::placeholder {
		font-weight: 400;
		color: var(--gray-back-color);
		font-size: 16px;
		line-height: 20px;
		font-family: 'Vremena Grotesk', sans-serif;
		opacity: 1;
	}
}
</style>
