import App from './app/App.vue';
import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';

import { createPinia } from 'pinia';

import { useRoutertore } from '@/entities/router-store';

import router from './app/router';
import './shared/styles/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(VueTheMask);
app.use(router);

const routeStore = useRoutertore();

router.beforeEach(async (to, from) => {
	routeStore.setRoute(from.path);
});
app.mount('#app');
