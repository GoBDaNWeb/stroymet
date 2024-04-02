import "./shared/styles/index.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";

import VueTheMask from "vue-the-mask";
import App from "./app/App.vue";
import router from "./app/router";
import { useRoutertore } from "@/entities/router-store";
import vSelect from 'vue-select'

const app = createApp(App);

app.use(createPinia());
app.use(VueTheMask);
app.use(router);

const routeStore = useRoutertore();

router.beforeEach(async (to, from) => {
  routeStore.setRoute(from.path);
});
app.mount("#app");
