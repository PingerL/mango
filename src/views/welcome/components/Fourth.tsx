import s from "./WelcomeLayout.module.scss";
import cloud from "../../../assets/cloud.svg";

export const Fourth = {
  setup() {
    return () => (
      <div class={s.card}>
        <img src={cloud} class={s.icon} />
        <h2>
          云备份
          <br />
          再也不怕数据丢失
        </h2>
      </div>
    );
  },
};
