import s from "./WelcomeLayout.module.scss";
import charts from "../../../assets/charts.svg";

export const Third = {
  setup() {
    return () => (
      <div class={s.card}>
        <img src={charts} class={s.icon} />
        <h2>
          数据可视化
          <br />
          收支一目了然
        </h2>
      </div>
    );
  },
};
