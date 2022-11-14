import { createRouter, createWebHashHistory } from "vue-router";
import { StartPage } from "../views/start/StartPage";
import { First } from "../views/welcome/components/First";
import { FirstActions } from "../views/welcome/components/FirstActions";
import { Fourth } from "../views/welcome/components/Fourth";
import { FourthActions } from "../views/welcome/components/FourthActions";
import { Second } from "../views/welcome/components/Second";
import { SecondActions } from "../views/welcome/components/SecondActions";
import { Third } from "../views/welcome/components/Third";
import { ThirdActions } from "../views/welcome/components/ThirdActions";
import { Welcome } from "../views/welcome/Welcome";
const routes = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      { path: "1", components: { main: First, footer: FirstActions } },
      { path: "2", components: { main: Second, footer: SecondActions } },
      { path: "3", components: { main: Third, footer: ThirdActions } },
      { path: "4", components: { main: Fourth, footer: FourthActions } },
    ],
  },
  {path: '/start', component: StartPage}
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
