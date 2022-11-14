import { defineComponent } from 'vue';
import { Button } from '../../shared/button/Button';
import { FloatButton } from '../../shared/float_button/FloatButton';
import s from './StartPage.module.scss';
export const StartPage = defineComponent({
     setup: (props, content) => {
      const onClick = () => {
        console.log('hi');
        
      }
       return () => (
         <div class={s.page}>
          <div class={s.button_wrapper}>
            <Button  class={s.button} onClick={onClick}>测试</Button>
          </div>
          <FloatButton />
         </div>
       )
    }
})