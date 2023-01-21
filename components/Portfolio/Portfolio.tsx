import { PortfolioProps } from "./Portfolio.props";
import styles from './Portfolio.module.css';
import cn from 'classnames';
import { Button, Htag } from "../index";
import { Ptag } from "../Ptag/Ptag";
import { Sticker } from "../Sticker/Sticker";
import { stickers } from "../../helpers/helpers";
import { useInnerWidth } from "../../hooks/hooks";

export const Portfolio = ({ className }: PortfolioProps): JSX.Element => {
  const w = useInnerWidth();
  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDown = (e) => {
    e.currentTarget.classList.add(styles.active);
    isDown = true;
    startX = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft = e.currentTarget.scrollLeft;
  };

  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const mouseUp = (e) => {
    isDown = false;
    e.currentTarget.classList.remove(styles.active);
  };

  const mouseLeave = (e) => {
    isDown = false;
    e.currentTarget.classList.remove(styles.active);
  };


  return (
    <div className={cn(styles.portfolio, className)}>
      <div className={styles.header}>
        <div>
          <Htag tag='h4' className={styles.colored}>{w}</Htag>
          <Htag tag='h2'>Лучшие работы <br/>2020 - 2023</Htag>
        </div>
        <div>
          <Ptag>Check out more portfolios I've worked on</Ptag>
          <Button appearance='ghost' arrow={true} className={styles.button}>Посмотреть все</Button>
        </div>
      </div>
      <div className={styles.works}
      onMouseDown={(e) => mouseDown(e)}
      onMouseMove={(e) => mouseMove(e)}
      onMouseUp={(e) => mouseUp(e)}
      onMouseLeave={(e) => mouseLeave(e)}
      
      >
        <div className={styles.work}>h1</div>
        <div className={styles.work}>h2</div>
        <div className={styles.work}>h3</div>
        <div className={styles.work}>h3</div>
      </div>
      <div className={styles.stickers}>
      <Sticker stickers={stickers} className={styles.sticker} />

      </div>
    </div>
  );
};