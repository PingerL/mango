import { createApp } from "vue";
import { Bar } from "./views/Bar";
import { Foo } from "./views/Foo";
import { createRouter, createWebHashHistory } from "vue-router";
import { App } from "./App";

const routes = [
  { path: "/", component: Bar },
  { path: "/about", component: Foo },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);
app.use(router);
app.mount("#app");
