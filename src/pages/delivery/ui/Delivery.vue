<script setup>
import DeliveryContacts from './DeliveryContacts.vue';
import DeliveryInfo from './DeliveryInfo.vue';

import { Breadcrumbs } from '@/shared/ui';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<Breadcrumbs :breadcrumbs="breadcrumbsList" />
		<DeliveryInfo />
		<DeliveryContacts />
	</main>
</template>
