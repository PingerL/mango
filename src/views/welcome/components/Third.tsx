import s from "./WelcomeLayout.module.scss";
import charts from "../../../assets/charts.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Third = {
  setup() {
    return () => (
      <WelcomeLayout>
        {{
          icons: () => <img src={charts} class={s.icon} />,
          title: () => (
            <h2>
              数据可视化
              <br />
              收支一目了然
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink class={s.fake} to="/start">
                跳过
              </RouterLink>
              <RouterLink to="/welcome/4">下一页</RouterLink>
              <RouterLink to="/start">跳过</RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
};