import { defineComponent } from 'vue';
import s from './Center.module.scss';
export const Center = defineComponent({
     setup: (props, content) => {
       return () => (
         <div class={s.center}>
            {content.slots.default?.()}
         </div>
       )
    }
})