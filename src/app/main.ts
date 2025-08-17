import { createApp } from "vue";
import "@/app/assets/main.css";
import router from "@/app/router";
import { createPinia } from "pinia";
import { DIContainer, intersectionDirective, clickAwayDirective } from "@/plugins";
import App from "@/app/App.vue";

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(DIContainer);
app.use(pinia);
app.directive("view", intersectionDirective);
app.directive("clickAway", clickAwayDirective);
app.mount("#app");
