import s from "./WelcomeLayout.module.scss";
import clock from "../../../assets/clock.svg";

export const Second = {
  setup() {
    return () => (
      <div class={s.card}>
        <img src={clock} class={s.icon} />
        <h2>
          每日提醒
          <br />
          不会遗漏每一笔账单
        </h2>
      </div>
    );
  },
};
