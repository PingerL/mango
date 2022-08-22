import { defineComponent, FunctionalComponent } from "vue";
import s from "./WelcomeLayout.module.scss";

export const WelcomeLayout: FunctionalComponent = (props, { slots }) => (
  <div class={s.wrapper}>
    <div class={s.card}>
      {slots.icons?.()}
      {slots.title?.()}
    </div>
    <div class={s.actions}>{slots.buttons?.()}</div>
  </div>
);
