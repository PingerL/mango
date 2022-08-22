import { defineComponent } from "vue";
import s from "../welcome/Welcome.module.scss";
import logo from "../../assets/logo.svg";
import { RouterView } from "vue-router";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>山竹记账</h1>
        </header>
        <main class={s.main}>
          <RouterView />
        </main>
      </div>
    );
  },
});
