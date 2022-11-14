import { defineComponent } from 'vue';
import { Button } from '../../shared/button/Button';
import { FloatButton } from '../../shared/float_button/FloatButton';
import pig from '../../assets/pig.svg'
import s from './StartPage.module.scss';
import { Center } from '../../shared/center/Center';
export const StartPage = defineComponent({
     setup: (props, content) => {
      const onClick = () => {
        console.log('hi');
        
      }
       return () => (
         <div class={s.page}>
          <nav>menu</nav>
          <Center class={s.pig_wrapper}>
            <img src={pig} class={s.pig}/>
          </Center>
          <div class={s.button_wrapper}>
            <Button  class={s.button} onClick={onClick}>开始记账</Button>
          </div>
          <FloatButton />
         </div>
       )
    }
})