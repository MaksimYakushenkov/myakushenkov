import { AboutProps } from "./About.props";
import styles from './About.module.css';
import { Htag } from "../Htag/Htag";
import { Button } from "../Button/Button";
import { Point } from "../Point/Point";
import { Ptag } from "../Ptag/Ptag";
import { points } from '../../helpers/helpers';
import CoubeIcon from '../../helpers/icons/coube.svg';
import cn from 'classnames';

export const About = ({ className }: AboutProps): JSX.Element => {
  return (
    <div className={cn(styles.about, className)} id='about'>
      <div className={styles.title}>
        <Htag tag='h4' className={styles.colored}>Обо мне</Htag>
        <Htag tag='h2' >Я могу добиться результатов, которые превзойдут ваши ожидания.</Htag>
        <Button appearance='ghost' arrow={true} className={styles.hire}><a href='https://t.me/yakushenkovm' target='_blank'>Предложить оффер</a></Button>
      </div>
      <CoubeIcon className={styles.bigCoube}/>
      <CoubeIcon className={styles.smallCoube}/>
      <div className={styles.description}>
        <Ptag>Привет, я Амалия Санчес, у меня есть понимание взаимосвязи между дизайном и пользователями благодаря детальному исполнению и надлежащему пользовательскому опыту.
Мне нравится работать над интересными и значимыми проектами, которыми я могу гордиться, и я всегда стремлюсь создавать чистые, пикселизированные интерфейсы, которые плавно анимируются. Я предпочитаю уделять приоритетное внимание не только коду, но и качеству, идеальному графическому дизайну и оптимизированной разработке.</Ptag>

        <div className={styles.points}>
          {
            points.map((point) => <Point key={point.count} title={point.title} count={point.count} />)
          }
        </div>
      </div>
    </div>
  );
};