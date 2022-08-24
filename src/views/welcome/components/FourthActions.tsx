import s from "./WelcomeLayout.module.scss";
import { RouterLink } from "vue-router";

export const FourthActions = {
  setup() {
    return () => (
      <div class={s.actions}>
        <RouterLink class={s.fake} to="/start">
          跳过
        </RouterLink>
        <RouterLink to="/welcome/4">开启应用</RouterLink>
        <RouterLink to="/start" class={s.fake}>
          跳过
        </RouterLink>
      </div>
    );
  },
};
