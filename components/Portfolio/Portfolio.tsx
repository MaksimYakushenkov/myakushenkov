import { PortfolioProps } from "./Portfolio.props";
import styles from './Portfolio.module.css';
import cn from 'classnames';
import { Button, Htag } from "../index";
import { Ptag } from "../Ptag/Ptag";
import { Sticker } from "../Sticker/Sticker";
import { stickers } from "../../helpers/helpers";
import { useInnerWidth } from "../../hooks/hooks";
import Image from 'next/image';
import Image1 from '../../helpers/icons/Image1.png';
import Image2 from '../../helpers/icons/Image2.png';
import Link from "next/link";

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
    const SCROLL_SPEED = 1;
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
        <div className={styles.work}>
          <Image src={Image1} alt='test'/>
          <div className={styles.workDescription}>
            <Link href='#' className={styles.link}>Название работы может быть длинное Название работы может быть длинное</Link>
          </div>
        </div>
        <div className={styles.work}>
          <Image src={Image2} alt='test'/>
          <div className={styles.workDescription}>
            <Link href='#' className={styles.link}>Название работы может быть длинное</Link>
          </div>
        </div>
        <div className={styles.work}>
          <Image src={Image2} alt='test'/>
          <div className={styles.workDescription}>
            <Link href='#' className={styles.link}>Название работы может быть длинное</Link>
          </div>
        </div>
        <div className={styles.work}>
          <Image src={Image1} alt='test'/>
          <div className={styles.workDescription}>
            <Link href='#' className={styles.link}>Название работы может быть длинное Название работы может быть длинное</Link>
          </div>
        </div>
      </div>
      <div className={styles.stickers}>
      <Sticker stickers={stickers} className={styles.sticker} />

      </div>
    </div>
  );
};