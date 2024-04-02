<script setup>
import { watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { MobileMenu } from '@/widgets/mobile-menu';
import { SuccessModal } from '@/widgets/success-modal';

const router = useRoute();

watch(router, () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'instant'
	});
});
</script>

<template>
	<Header />
	<MobileMenu />
	<RouterView />
	<Footer />
	<SuccessModal />
</template>
