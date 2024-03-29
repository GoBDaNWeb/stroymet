<script setup>
import AboutMain from './AboutMain.vue';
import AboutNumbers from './AboutNumbers.vue';
import DocumentSwiper from './DocumentSwiper.vue';
import Hero from './Hero.vue';
import ProductionSwiper from './ProductionSwiper.vue';

import { documentsList, productionImgs } from '../config';
</script>

<template>
	<main>
		<Hero />
		<AboutMain />
		<AboutNumbers />
		<ProductionSwiper :imgs="productionImgs" />
		<DocumentSwiper :documentsList="documentsList" />
	</main>
</template>
