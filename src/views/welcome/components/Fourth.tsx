import s from "./WelcomeLayout.module.scss";
import cloud from "../../../assets/cloud.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Fourth = {
  setup() {
    return () => (
      <WelcomeLayout>
        {{
          icons: () => <img src={cloud} class={s.icon} />,
          title: () => (
            <h2>
              云备份
              <br />
              再也不怕数据丢失
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink class={s.fake} to="/start">
                跳过
              </RouterLink>
              <RouterLink to="/welcome/4">开启应用</RouterLink>
              <RouterLink to="/start" class={s.fake}>
                跳过
              </RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
};