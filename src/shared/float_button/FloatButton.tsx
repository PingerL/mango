import { defineComponent } from 'vue';
import add from "../../assets/add.svg"
import s from './FloatButton.module.scss';
export const FloatButton = defineComponent({
     setup: (props, content) => {
       return () => (
         <div class={s.floatButton}>
          <img class={s.img} src={add}  />
         </div>
       )
    }
})