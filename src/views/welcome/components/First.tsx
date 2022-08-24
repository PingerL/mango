import s from "./WelcomeLayout.module.scss";
import pig from "../../../assets/pig.svg";

export const First = {
  setup() {
    return () => (
      <div class={s.card}>
        <img src={pig} class={s.icon} />
        <h2>
          会挣钱
          <br />
          还要会省钱
        </h2>
      </div>
    );
  },
};
