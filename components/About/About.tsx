import { AboutProps } from "./About.props";
import styles from './About.module.css';
import { Htag } from "../Htag/Htag";
import { ButtonLink } from "../ButtonLink/ButtonLink";
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
        <Htag tag='h2' >Мои проекты превзойдут ваши ожидания.</Htag>
        <ButtonLink appearance='ghost' href='https://t.me/yakushenkovm' target='_blank' arrow={true} className={styles.hire}>Предложить оффер</ButtonLink>
      </div>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.6}}
      className={styles.bigCoubeContainer}
      >
        <CoubeIcon className={styles.bigCoube}/>
      </motion.div>
      <CoubeIcon className={styles.smallCoube}/>
      <div className={styles.description}>
        <Ptag>Нахожусь в поисках интересных проектов. <strong>Создам и разработаю сайт с нуля, я Full Stack Web-Developer</strong>. Уверен, что смогу усилить вашу компанию, ведь мне нравится работать над интересными и значимыми проектами, которыми я смогу гордиться. Я стремлюсь создавать чистые, адаптивные и плавные интерфейсы.</Ptag>
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