import "./shared/styles/index.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./app/App.vue";
import router from "./app/router";
import { useRoutertore } from "@/entities/router-store";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const routeStore = useRoutertore();

router.beforeEach(async (to, from) => {
  routeStore.setRoute(from.path);
});
app.mount("#app");
