import { PortfolioProps } from "./Portfolio.props";
import styles from './Portfolio.module.css';
import cn from 'classnames';
import { ButtonLink, Htag } from "../index";
import { Ptag } from "../Ptag/Ptag";
import { Sticker } from "../Sticker/Sticker";
import { portfolios, stickers } from "../../helpers/helpers";
import Link from "next/link";
import { Carousel } from "../Carousel/Carousel";
import { Work } from "../Work/Work";

export const Portfolio = ({ className }: PortfolioProps): JSX.Element => {
  
  return (
    <div className={cn(styles.portfolio, className)} id='works'>
      <div className={styles.header}>
        <div>
          <Htag tag='h4' className={styles.colored}>Портфолио</Htag>
          <Htag tag='h2'>Лучшие работы <br/>2020 - 2023</Htag>
        </div>
        <div>
          <Ptag>Ознакомьтесь с полным списком моих работ здесь:</Ptag>
          <ButtonLink appearance='ghost' arrow={true} className={styles.button} href='https://github.com/MaksimYakushenkov' target='_blank'>Посмотреть все</ButtonLink>
        </div>
      </div>
      <Carousel className={styles.works}>
        {portfolios.map((portfolio => 
          <Work key={portfolio.link} title={portfolio.title} link={portfolio.link} src={portfolio.image} />
        ))}
      </Carousel>
      <div className={styles.stickers}>
      <Sticker stickers={stickers} className={styles.sticker} />

      </div>
    </div>
  );
};