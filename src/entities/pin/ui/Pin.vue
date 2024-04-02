<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { ArrowRightIcon, PlusIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

defineProps(['direction']);

const isOpen = ref(false);

const handleOpenPin = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<div class="pin" :class="`${direction} ${isOpen ? 'active' : ''}`">
		<Button @click="handleOpenPin" variable="nav"><PlusIcon /></Button>
		<div class="pin-content">
			<h4>кровля</h4>
			<p>Небольшой абзац текста про кровельные материалы от производителя.</p>
			<div class="links">
				<RouterLink to="/catalog"><ArrowRightIcon />металлочерепица</RouterLink>
				<RouterLink to="/catalog"><ArrowRightIcon />профилированный лист</RouterLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.pin {
	button {
		svg {
			line {
				stroke: var(--white-color);
			}
		}
	}
	.links {
		svg {
			path {
				stroke: var(--blue-color);
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.pin.left {
	.pin-content {
		left: 40px;
		right: auto;
	}
}
.pin.right {
	.pin-content {
		right: 40px;
		left: auto;
	}
}
.pin.active {
	button {
		svg {
			transform: rotate(45deg);
		}
	}
	.pin-content {
		opacity: 1;
		pointer-events: all;
	}
}
.pin {
	display: flex;
	position: relative;
	button {
		width: 40px;
		height: 40px;
		svg {
			transition: var(--trs-300);
		}
	}
	.pin-content {
		background: var(--white-color);
		padding: 30px;
		max-width: 300px;
		left: 40px;
		top: 0;
		opacity: 0;
		transition: var(--trs-300);
		position: absolute;
		pointer-events: none;
		h4 {
			color: var(--gray-color);
			font-weight: 400;
			font-size: 20px;
			line-height: 22px;
			margin-bottom: 20px;
		}
		p {
			color: var(--gray-color);
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
		}
		.links {
			margin-top: 20px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			a {
				color: var(--blue-color);
				font-weight: 400;
				font-size: 14px;
				text-transform: uppercase;
				line-height: 14px;
				display: flex;
				align-items: center;
				gap: 10px;
			}
		}
	}
}
</style>
