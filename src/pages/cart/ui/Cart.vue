<script setup>
import { Cart } from '@/widgets/cart';

import { Breadcrumbs } from '@/shared/ui';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<Breadcrumbs :breadcrumbs="breadcrumbsList" />
		<Cart />
	</main>
</template>
