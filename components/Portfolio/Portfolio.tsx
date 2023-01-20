import { PortfolioProps } from "./Portfolio.props";
import styles from './Portfolio.module.css';
import cn from 'classnames';
import { Button, Htag } from "../index";
import { Ptag } from "../Ptag/Ptag";
import { Sticker } from "../Sticker/Sticker";
import { stickers } from "../../helpers/helpers";

export const Portfolio = ({ className }: PortfolioProps): JSX.Element => {
  return (
    <div className={cn(styles.portfolio, className)}>
      <div className={styles.header}>
        <div>
          <Htag tag='h4' className={styles.colored}>Портфолио</Htag>
          <Htag tag='h2'>Лучшие работы <br/>2020 - 2023</Htag>
        </div>
        <div>
          <Ptag>Check out more portfolios I've worked on</Ptag>
          <Button appearance='ghost' arrow={true} className={styles.button}>Посмотреть все</Button>
        </div>
      </div>
      <div className={styles.works}>
        Work Container
      </div>
      <Sticker stickers={stickers} className={styles.sticker} />
    </div>
  );
};