import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "./App.vue";
import MainGameView from "./components/MainGameView.vue";
import ExtensionsView from "./components/ExtensionsView.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: MainGameView, alias: "/oot" },
  { path: "/ootextras", component: ExtensionsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
