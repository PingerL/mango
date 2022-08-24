import { defineComponent, Transition, VNode } from "vue";
import s from "./Welcome.module.scss";
import logo from "../../assets/logo.svg";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>芒果记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name="main">
            {({
              Component: X,
              route,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});
