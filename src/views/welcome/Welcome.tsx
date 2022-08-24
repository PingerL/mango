import { defineComponent } from "vue";
import s from "./Welcome.module.scss";
import logo from "../../assets/logo.svg";
import { RouterView } from "vue-router";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>芒果记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name="main" />
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});
