import { createRouter, createWebHashHistory } from "vue-router";
import { First } from "../views/welcome/components/First";
import { Fourth } from "../views/welcome/components/Fourth";
import { Second } from "../views/welcome/components/Second";
import { Third } from "../views/welcome/components/Third";
import { Welcome } from "../views/welcome/Welcome";
const routes = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      { path: "1", component: First },
      { path: "2", component: Second },
      { path: "3", component: Third },
      { path: "4", component: Fourth },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
