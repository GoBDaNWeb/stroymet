<script setup>
import ContactsInfo from './ContactsInfo.vue';

import { Breadcrumbs } from '@/shared/ui';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<Breadcrumbs :breadcrumbs="breadcrumbsList" />
		<ContactsInfo />
	</main>
</template>
