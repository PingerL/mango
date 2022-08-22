import s from "./WelcomeLayout.module.scss";
import clock from "../../../assets/clock.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Second = {
  setup() {
    return () => (
      <WelcomeLayout>
        {{
          icons: () => <img src={clock} class={s.icon} />,
          title: () => (
            <h2>
              每日提醒
              <br />
              不会遗漏每一笔账单
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink class={s.fake} to="/start">
                跳过
              </RouterLink>
              <RouterLink to="/welcome/3">下一页</RouterLink>
              <RouterLink to="/start">跳过</RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
};
