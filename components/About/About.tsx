import { AboutProps } from "./About.props";
import styles from './About.module.css';
import { Htag } from "../Htag/Htag";
import { Button } from "../Button/Button";
import { Point } from "../Point/Point";
import { Ptag } from "../Ptag/Ptag";
import { points } from '../../helpers/helpers';
import CoubeIcon from '../../helpers/icons/coube.svg';
import cn from 'classnames';
import { motion } from "framer-motion";

export const About = ({ className }: AboutProps): JSX.Element => {
  return (
    <div className={cn(styles.about, className)} id='about'>
      <div className={styles.title}>
        <Htag tag='h4' className={styles.colored}>Обо мне</Htag>
        <Htag tag='h2' >Я добиваюсь результатов, которые превзойдут ваши ожидания</Htag>
        <Button appearance='ghost' arrow={true} className={styles.hire}><a href='https://t.me/yakushenkovm' target='_blank'>Предложить оффер</a></Button>
      </div>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      
      >
        <CoubeIcon className={styles.bigCoube}/>
      </motion.div>
      <CoubeIcon className={styles.smallCoube}/>
      <div className={styles.description}>
        <Ptag>Нахожусь в поисках работы на позицию <strong>full stack web-deloper / middle web-developer</strong>. Уверен, что смогу усилить вашу компанию, ведь мне нравится работать над интересными и значимыми проектами, которыми я могу гордиться, и я всегда стремлюсь создавать чистые, адаптивные интерфейсы, которые плавно анимируются.</Ptag>
        <Ptag>Я предпочитаю уделять приоритетное внимание не только качеству кода, но и идеальному графическому дизайну и оптимизированной разработке.</Ptag>

        <div className={styles.points}>
          {
            points.map((point) => <Point key={point.count} title={point.title} count={point.count} />)
          }
        </div>
      </div>
    </div>
  );
};